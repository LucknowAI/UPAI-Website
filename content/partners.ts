// Communities, colleges and companies UPAI Labs and Lucknow AI Labs have run
// events with. Only list an organisation with its agreement to show its logo.
export type Partner = { name: string; logo: string; href?: string };

export const partners: Partner[] = [
  { name: "AI Community Lucknow", logo: "/ai-community-lucknow.png", href: "https://aicommunity.lucknow.dev/" },
  { name: "GDG Lucknow", logo: "/gdglucknow.png" },
  { name: "CIC Lucknow", logo: "/cic.png" },
  { name: "C2AIR", logo: "/c2air.png" },
  { name: "Tikaj", logo: "/tikaj.png" },
  { name: "UMAGA Edutech", logo: "/umaga.png" },
  { name: "Hunto AI", logo: "/huntoai.png" },
];
