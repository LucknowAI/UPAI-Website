import { NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import {
  CONTACT_CATEGORIES as CATEGORIES,
  CONTACT_EMAIL as FALLBACK_EMAIL,
  CONTACT_LIMITS as LIMITS,
  type ContactCategory as Category,
} from "@/lib/contact";

// Contact form endpoint.
//
// Every message is emailed to the team inbox (CONTACT_TO, default
// hello@upailabs.org) with Reply-To set to the visitor, so the team can answer
// with a normal reply. Nothing is ever sent to the address a visitor types in:
// doing that would let anyone use this form to send mail from our domain to
// any address they choose.
//
// Configuration (set as environment variables on the host, never in git):
//   SMTP_USER   mailbox used to send, e.g. hello@upailabs.org      (required)
//   SMTP_PASS   password of that mailbox                            (required)
//   SMTP_HOST   default smtp.hostinger.com
//   SMTP_PORT   default 465 (SSL). Use 587 for STARTTLS.
//   CONTACT_TO  where messages are delivered, default hello@upailabs.org

export const runtime = "nodejs";

const PER_IP_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 }; // 5 messages per 10 minutes per IP
const OVERALL_LIMIT = { windowMs: 60 * 60 * 1000, max: 60 }; // safety net for the whole site
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// One SMTP transport per server process, created on first use.
let transporter: Transporter | null = null;
function getTransporter(): Transporter | null {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port,
      secure: port === 465,
      auth: { user, pass },
      // Fail fast instead of leaving the visitor waiting on a stuck connection.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }
  return transporter;
}

// In-memory rate limits. Enough for a single Node process, which is how the
// site runs on Hostinger. They reset when the app restarts.
const hits = new Map<string, number[]>();
function isRateLimited(
  key: string,
  limit: { windowMs: number; max: number },
  now = Date.now()
): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < limit.windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    hits.forEach((times, k) => {
      if (times.every((t) => now - t >= OVERALL_LIMIT.windowMs)) hits.delete(k);
    });
  }
  return recent.length > limit.max;
}

// The visitor's IP as seen by the hosting proxy. The proxy appends the real
// client address as the LAST X-Forwarded-For entry; earlier entries come from
// the client and can be faked, so they are ignored.
function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const last = forwarded?.split(",").map((s) => s.trim()).filter(Boolean).pop();
  return last || request.headers.get("x-real-ip")?.trim() || "unknown";
}

// Strip control characters (including line breaks) from single-line fields.
const oneLine = (value: unknown) =>
  String(value ?? "").replace(/[\u0000-\u001f\u007f]+/g, " ").trim();

const badRequest = (error: string) => NextResponse.json({ error }, { status: 400 });

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid request.");
  }

  // Honeypot: a field people never see. Bots that fill it get a normal-looking
  // success response and nothing is sent.
  if (oneLine(body.website) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(body.name);
  const email = oneLine(body.email).toLowerCase();
  const message = String(body.message ?? "").replace(/\r\n?/g, "\n").trim();
  const category: Category =
    typeof body.category === "string" && body.category in CATEGORIES
      ? (body.category as Category)
      : "general";

  if (!name || name.length > LIMITS.name) {
    return badRequest("Please enter your name (up to 100 characters).");
  }
  if (email.length > LIMITS.email || !EMAIL_RE.test(email)) {
    return badRequest("Please enter a valid email address.");
  }
  if (message.length < LIMITS.minMessage || message.length > LIMITS.message) {
    return badRequest("Please write a message between 10 and 5,000 characters.");
  }

  if (
    isRateLimited(`ip:${clientIp(request)}`, PER_IP_LIMIT) ||
    isRateLimited("all", OVERALL_LIMIT)
  ) {
    return NextResponse.json(
      { error: `Too many messages right now. Please try again later, or email ${FALLBACK_EMAIL}.` },
      { status: 429 }
    );
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.error("[contact] SMTP_USER or SMTP_PASS is not set, so the message cannot be sent.");
    return NextResponse.json(
      { error: `The form is temporarily unavailable. Please email ${FALLBACK_EMAIL}.` },
      { status: 503 }
    );
  }

  const topic = CATEGORIES[category];
  const received = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    await mailer.sendMail({
      from: { name: "UPAI Labs website", address: process.env.SMTP_USER as string },
      to: process.env.CONTACT_TO || FALLBACK_EMAIL,
      replyTo: { name, address: email },
      subject: `[Website] [${topic}] ${name}`.slice(0, 200),
      // Plain text only, so nothing a visitor types can be rendered as HTML.
      text: [
        "New message from the upailabs.org contact form",
        "",
        `Name:     ${name}`,
        `Email:    ${email}`,
        `Topic:    ${topic}`,
        `Received: ${received} IST`,
        "",
        "Message:",
        message,
        "",
        "--",
        `Reply to this email to answer ${name} directly.`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] Sending failed:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: `Your message could not be sent. Please try again, or email ${FALLBACK_EMAIL}.` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
