// Open-source projects shown on /projects and counted on the home page.
// Descriptions come from each repository's README. "updated" is the month of
// the last commit when this list was refreshed (November 2026).
// The Lucknow AI Labs site keeps the full list, including earlier projects:
export const ALL_PROJECTS_URL = "https://lucknowai.github.io/projects/";

export type Project = {
  name: string;
  summary: string;
  repo: string;
  image?: string;
  live?: { href: string; label: string };
  updated: string;
  featured?: boolean;
};

export const activeProjects: Project[] = [
  {
    name: "NAWAB AI",
    summary:
      "A conversational guide to Lucknow. A Gemini-based agent brings together Google Maps, local news, YouTube, Lucknow Metro fares and more behind one chat interface.",
    repo: "https://github.com/LucknowAI/nawab",
    image: "/nawab-ai.jpg",
    updated: "Nov 2026",
    featured: true,
  },
  {
    name: "Awadhi language project",
    summary:
      "Data and tools for Awadhi, a language with about 38 million speakers. The website tells the story of the language and asks speakers to record sentences for speech AI.",
    repo: "https://github.com/LucknowAI/Awadhi",
    image: "/Project_Awadhi.jpg",
    live: { href: "https://awadhi-language.vercel.app/", label: "Visit the Awadhi website" },
    updated: "Nov 2026",
    featured: true,
  },
  {
    name: "Loki LLM",
    summary:
      "Private, offline AI chat for Android. Runs open LLMs on the phone with llama.cpp, including question answering over your own documents and a tool-calling agent.",
    repo: "https://github.com/LucknowAI/loki_llm",
    updated: "Nov 2026",
    featured: true,
  },
  {
    name: "Lucknow Tech Events",
    summary:
      "One place for the tech events happening in Lucknow. Being rebuilt to read public event listings once a day.",
    repo: "https://github.com/LucknowAI/lucknow-live-events",
    updated: "Nov 2026",
    featured: true,
  },
  {
    name: "Bridge",
    summary:
      "Networking matchmaking for events: matches attendees by profile and interests so people find the right people to talk to.",
    repo: "https://github.com/LucknowAI/Bridge",
    updated: "Oct 2026",
    featured: true,
  },
  {
    name: "Agents from Scratch",
    summary:
      "Learning material: the same travel-planning agent built three ways, in plain Python, with LangChain and with Pydantic AI.",
    repo: "https://github.com/LucknowAI/agents_from_sratch",
    updated: "Feb 2026",
  },
  {
    name: "Sociomatic",
    summary:
      "An AI assistant for community LinkedIn posts: turns short briefs about events and launches into ready-to-post content.",
    repo: "https://github.com/LucknowAI/sociomatic",
    updated: "Feb 2026",
  },
  {
    name: "Final Year Project Generator",
    summary: "Helps final-year students generate and refine ideas for their final year projects.",
    repo: "https://github.com/LucknowAI/finalYearGenerator",
    updated: "Feb 2026",
  },
  {
    name: "sudo ship it starter kit",
    summary: "Everything a builder needs to start a weekend project: free AI coding tools and how to set them up.",
    repo: "https://github.com/LucknowAI/sudo-ship-it",
    updated: "Feb 2026",
  },
];
