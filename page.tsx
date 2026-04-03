import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070a12"
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Портфолио разработчика`,
    template: `%s — ${site.name}`
  },
  description: `Персональное портфолио разработчика ${site.name}: навыки, опыт, проекты и контакты.`,
  openGraph: {
    type: "website",
    title: `${site.name} — Портфолио разработчика`,
    description: "Навыки, опыт, проекты и контакты.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — Portfolio`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Портфолио разработчика`,
    description: "Навыки, опыт, проекты и контакты.",
    images: ["/og.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    address: site.location,
    url: "",
    sameAs: site.contacts.filter((c) => c.href.startsWith("http")).map((c) => c.href)
  };

  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
