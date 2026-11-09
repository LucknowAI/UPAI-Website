// Shared by the contact form (client) and /api/contact (server).
// The label becomes part of the email subject, so the team can filter by topic.
export const CONTACT_CATEGORIES = {
  general: "General",
  partnership: "Sponsorship or partnership",
  volunteer: "Volunteer or mentor",
  research: "Research collaboration",
  media: "Media or press",
} as const;

export type ContactCategory = keyof typeof CONTACT_CATEGORIES;

export const CONTACT_LIMITS = { name: 100, email: 254, minMessage: 10, message: 5000 };

export const CONTACT_EMAIL = "hello@upailabs.org";
