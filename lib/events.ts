import data from "@/content/events.json";

// Events come from content/events.json, a copy of the Lucknow AI Labs events
// list (lucknowai.github.io/_data/events.yml). Refresh it with
// `npm run sync:events`. Phase 2 merges both sites onto one source.

export type EventItem = {
  date: string; // "YYYY-MM-DD"
  title: string;
  type: string;
  format?: string;
  venue?: string;
  organisers: string;
  link?: string;
  recap?: string; // path on the Lucknow AI Labs site
  note?: string;
  status?: string; // "unconfirmed" entries are never shown
};

export const LAI_SITE = "https://lucknowai.github.io";

export const TYPE_LABELS: Record<string, string> = {
  hackathon: "Hackathon",
  summit: "Summit",
  workshop: "Workshop",
  "study-jam": "Study jam",
  "paper-reading": "Paper reading",
  meetup: "Meetup",
  talk: "Talks",
  ama: "AMA",
};

export const allEvents: EventItem[] = (data as EventItem[]).filter(
  (e) => e.status !== "unconfirmed"
);

/** Today's date in Lucknow, as "YYYY-MM-DD". */
export function todayInLucknow(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/** Past events, newest first. */
export function pastEvents(today = todayInLucknow()): EventItem[] {
  return allEvents.filter((e) => e.date < today).reverse();
}

/** Upcoming events, soonest first. */
export function upcomingEvents(today = todayInLucknow()): EventItem[] {
  return allEvents.filter((e) => e.date >= today);
}

export function eventUrl(e: EventItem): string | undefined {
  if (e.recap) return LAI_SITE + e.recap;
  return e.link;
}

export function formatEventDate(date: string, withWeekday = false): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-IN", {
    weekday: withWeekday ? "long" : undefined,
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}
