import Link from "next/link";
import { CalendarDays } from "lucide-react";
import {
  type EventItem,
  TYPE_LABELS,
  eventUrl,
  formatEventDate,
  pastEvents,
  upcomingEvents,
} from "@/lib/events";

function EventTitle({ event }: { event: EventItem }) {
  const href = eventUrl(event);
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-secondary underline-offset-4 hover:underline">
      {event.title}
    </a>
  ) : (
    <>{event.title}</>
  );
}

function TypeBadge({ type }: { type: string }) {
  const label = TYPE_LABELS[type];
  if (!label) return null;
  const hackathon = type === "hackathon";
  return (
    <span
      className={`ml-2 inline-block px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full border ${
        hackathon ? "border-secondary/40 text-secondary" : "border-white/15 text-gray-400"
      }`}
    >
      {label}
    </span>
  );
}

function UpcomingCard({ event }: { event: EventItem }) {
  const href = eventUrl(event);
  return (
    <div className="rounded-2xl bg-[#111] border border-secondary/40 p-6 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Upcoming</p>
      <h3 className="text-2xl font-bold text-white">
        <EventTitle event={event} />
      </h3>
      <p className="mt-2 text-white">
        {formatEventDate(event.date, true)}
        {event.note ? ` · ${event.note}` : ""}
      </p>
      {(event.format || event.venue) && (
        <p className="text-gray-400 text-sm mt-1">
          {[event.format && event.format[0].toUpperCase() + event.format.slice(1), event.venue]
            .filter(Boolean)
            .join(" · ")}
        </p>
      )}
      <p className="text-gray-500 text-sm mt-1">{event.organisers}</p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Details and registration
        </a>
      )}
    </div>
  );
}

export default function EventsSection({ variant = "home" }: { variant?: "home" | "full" }) {
  const upcoming = upcomingEvents();
  const past = pastEvents();
  const full = variant === "full";

  const byYear = past.reduce<Record<string, EventItem[]>>((acc, e) => {
    (acc[e.date.slice(0, 4)] ||= []).push(e);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort().reverse();
  const Heading = full ? "h1" : "h2";

  return (
    <section id="events" className="py-16 md:py-24 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
              <p className="text-xl font-medium text-white flex items-center">
                <CalendarDays className="w-5 h-5 mr-2" /> Events
              </p>
            </div>
          </div>
          <Heading className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{past.length} events </span>
            <span className="text-gray-500">since November 2023</span>
          </Heading>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meetups, workshops, study jams, paper reading sessions, summits and hackathons in
            Lucknow, many of them run with AI Community Lucknow, GDG Lucknow and colleges across
            the city.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {upcoming.length > 0 ? (
            upcoming.map((e) => <UpcomingCard key={e.date + e.title} event={e} />)
          ) : (
            <p className="text-center text-gray-400">
              The next event will be announced on{" "}
              <a href="https://www.commudle.com/communities/upai-labs/events" className="underline hover:text-white">
                Commudle
              </a>
              .
            </p>
          )}
        </div>

        {!full && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Recent events</h3>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {past.slice(0, 5).map((e) => (
                <li key={e.date + e.title} className="py-3 flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                  <span className="text-gray-500 text-sm md:w-40 shrink-0">{formatEventDate(e.date)}</span>
                  <span className="text-white">
                    <EventTitle event={e} />
                    <TypeBadge type={e.type} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Link href="/events" className="underline hover:text-secondary">
                See all {past.length} events
              </Link>
            </div>
          </div>
        )}

        {full &&
          years.map((year) => (
            <div key={year} className="mt-12">
              <h2 className="text-2xl font-bold mb-4">{year}</h2>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-sm">
                  <thead className="bg-[#111] text-left text-gray-400">
                    <tr>
                      <th className="px-4 py-3 font-medium">Date</th>
                      <th className="px-4 py-3 font-medium">Event</th>
                      <th className="px-4 py-3 font-medium">Organised by</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {byYear[year].map((e) => (
                      <tr key={e.date + e.title} className="align-top">
                        <td className="px-4 py-3 whitespace-nowrap text-gray-400">
                          {formatEventDate(e.date).replace(/ \d{4}$/, "")}
                        </td>
                        <td className="px-4 py-3 text-white">
                          <EventTitle event={e} />
                          <TypeBadge type={e.type} />
                          {e.venue && <div className="text-gray-500 text-xs mt-1">{e.venue}</div>}
                          {e.note && <div className="text-gray-500 text-xs mt-1">{e.note}</div>}
                        </td>
                        <td className="px-4 py-3 text-gray-400">{e.organisers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

        {full && (
          <p className="mt-10 text-center text-gray-500 text-sm">
            &ldquo;Organised by&rdquo; shows the host named on the event page or on Commudle. AI
            Community Lucknow was earlier called TFUG Lucknow. Event recaps live on the{" "}
            <a href="https://lucknowai.github.io/events/" className="underline hover:text-white">
              Lucknow AI Labs site
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
