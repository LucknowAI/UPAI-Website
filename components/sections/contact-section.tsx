"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CONTACT_CATEGORIES,
  CONTACT_EMAIL,
  CONTACT_LIMITS,
  type ContactCategory,
} from "@/lib/contact";

type FormState = {
  name: string;
  email: string;
  category: ContactCategory;
  message: string;
  website: string; // honeypot, stays empty for real visitors
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  category: "general",
  message: "",
  website: "",
};

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; text: string };

const inputClass =
  "w-full px-3 py-2 bg-background/50 border border-white/10 rounded-md focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          body.error || `Something went wrong. Please email ${CONTACT_EMAIL}.`
        );
      }
      setStatus({ kind: "sent" });
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus({
        kind: "error",
        text:
          err instanceof Error
            ? err.message
            : `Something went wrong. Please email ${CONTACT_EMAIL}.`,
      });
    }
  }

  const sending = status.kind === "sending";

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/5 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Info Column */}
          <div>
            <div className="inline-block mb-4 p-2 bg-primary/10 rounded-lg">
              <Star className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Be part of Uttar Pradesh&apos;s growing AI ecosystem. Connect with
              like-minded individuals, learn from experts, and contribute to
              innovative projects.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="hover:text-primary transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2 group">
              <Link
                href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Member
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right Form Column */}
          <div className="bg-card/70 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 rounded-lg border border-white/10 z-10 hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

            {status.kind === "sent" ? (
              <div role="status" className="space-y-4 relative z-20">
                <p className="text-green-500">
                  Thank you. Your message has reached the UPAI Labs team, and we
                  will reply to the email address you gave.
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStatus({ kind: "idle" })}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={CONTACT_LIMITS.name}
                      autoComplete="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={CONTACT_LIMITS.email}
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-category" className="text-sm font-medium">
                    What is this about?
                  </label>
                  <select
                    id="contact-category"
                    name="category"
                    value={form.category}
                    onChange={onChange}
                    className={inputClass}
                  >
                    {Object.entries(CONTACT_CATEGORIES).map(([value, label]) => (
                      <option key={value} value={value} className="bg-black">
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    minLength={CONTACT_LIMITS.minMessage}
                    maxLength={CONTACT_LIMITS.message}
                    value={form.message}
                    onChange={onChange}
                    placeholder="How can we help?"
                    className={inputClass}
                  />
                </div>

                {/* Honeypot: hidden from people and screen readers. Bots tend to fill it. */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden"
                >
                  <label htmlFor="contact-website">Leave this field empty</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={onChange}
                  />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>

                {status.kind === "error" && (
                  <p role="alert" className="mt-2 text-sm text-red-500">
                    {status.text}
                  </p>
                )}

                <p className="text-xs text-muted-foreground">
                  We only use your details to reply to this message.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
