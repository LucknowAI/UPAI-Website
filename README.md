# UPAI Labs website

Source of [upailabs.org](https://upailabs.org), the website of UPAI Labs Foundation (Uttar Pradesh AI Labs), a Section 8 not-for-profit in Lucknow. Built with [Next.js](https://nextjs.org) 14 (App Router), Tailwind CSS and shadcn/ui. Hosted on Hostinger as a Node.js web app.

The Lucknow AI Labs chapter site is a separate repository: [LucknowAI/lucknowai.github.io](https://github.com/LucknowAI/lucknowai.github.io).

## Run it on your computer

Needs Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>.

### Contact form

The form emails messages to `hello@upailabs.org` through Hostinger SMTP. Without settings it shows "temporarily unavailable, please email hello@upailabs.org". To send real test messages locally, copy `.env.example` to `.env.local` and fill in `SMTP_PASS`. Never commit `.env.local`.

On Hostinger the same variables are set in hPanel: Websites → upailabs.org → **Environment variables**, then **Save and redeploy**.

| Variable | Value |
|:--|:--|
| `SMTP_USER` | `hello@upailabs.org` |
| `SMTP_PASS` | password of that mailbox |
| `CONTACT_TO` | optional, defaults to `hello@upailabs.org` |
| `SMTP_HOST` / `SMTP_PORT` | optional, default `smtp.hostinger.com` / `465` (use `587` if 465 is blocked) |

## Where things are

| Path | What it is |
|:--|:--|
| `app/` | Pages: home, `about`, `events`, `labs` (chapters), `research`, `projects`, `blogs`, `faqs`, `contact_us`, `privacy` |
| `app/api/contact/route.ts` | Contact form endpoint |
| `app/api/fetch-blog/route.ts` | Loads Medium articles for the blog reader |
| `components/sections/` | Page sections |
| `content/events.json` | **All events** (copied from the Lucknow AI Labs site, see below) |
| `content/projects.ts` | Open-source projects |
| `content/partners.ts` | Partner logos (only with the partner's agreement) |
| `Data/faqdata.json` | FAQs |
| `lib/events.ts`, `lib/contact.ts` | Helpers shared by pages and the API |
| `public/` | Images. Compress photos to about 1600 px wide before adding them. |

The numbers on the home page (events, hackathons, projects) are calculated from the content files, so they always match what the site lists.

## Updating events

Events are kept in one list on the Lucknow AI Labs site (`_data/events.yml` in that repository). After adding an event there, copy it here:

```bash
npm run sync:events     # downloads the list from GitHub into content/events.json
```

Commit the updated `content/events.json`. Pages with events refresh themselves at most every 12 hours, so the "upcoming" event stays correct between deploys.

## Deploying

Hostinger builds and deploys from GitHub. Merging into `main` publishes the site, so test locally (`npm run build`) before merging.

## Security notes

- The Next.js image optimizer is turned off (`images.unoptimized` in `next.config.js`) because Next.js 14 has unpatched advisories in it. Re-enable it after upgrading to Next.js 15.5 or newer.
- The contact form never emails the address a visitor types in, accepts plain email addresses only, and is rate limited.
