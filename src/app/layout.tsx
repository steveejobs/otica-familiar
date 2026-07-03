import type { Metadata, Viewport } from "next";
import { localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";
import "./final-polish.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ótica da Família | Óculos, lentes e armações em Araguaína",
  description:
    "Armações, lentes e óculos solar com atendimento cuidadoso na Ótica da Família, em Araguaína - TO.",
  keywords: [
    "Ótica da Família",
    "ótica em Araguaína",
    "armações em Araguaína",
    "lentes em Araguaína",
    "óculos solar em Araguaína",
  ],
  icons: {
    icon: [{ url: site.favicon, type: "image/png" }],
    shortcut: site.favicon,
    apple: [{ url: site.favicon, type: "image/png" }],
  },
  openGraph: {
    title: "Ótica da Família | Óculos, lentes e armações em Araguaína",
    description:
      "Armações, lentes e óculos solar com atendimento cuidadoso na Ótica da Família, em Araguaína - TO.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: site.logoFull,
        width: 803,
        height: 808,
        alt: "Ótica da Família",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF8EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
