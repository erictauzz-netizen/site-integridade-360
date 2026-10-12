import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Bingbot",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.integridade360.com.br/sitemap.xml",
  };
}
