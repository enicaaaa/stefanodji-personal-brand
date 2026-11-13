export const siteConfig = {
  name: "Djordje Stefanovic",
  title: "Djordje Stefanovic — Personal Brand",
  description: "Personal brand site of Djordje Stefanovic.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en",
  links: {
    linkedin: "https://www.linkedin.com/in/djordje-stefanovic-2441a4255/",
    // Fill in when ready:
    // github: "https://github.com/...",
    // x: "https://x.com/...",
  },
} as const;

export type SiteConfig = typeof siteConfig;
