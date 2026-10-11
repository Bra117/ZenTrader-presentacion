import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const description =
  "Diario de trading, seguimiento de cuentas y desafíos de prop firms, analítica y coaching automático. Offline-first, con sincronización opcional.";

export const metadata: Metadata = {
  title: "ZenTrader — Diario de Trading y Rastreador de Desafíos",
  description,
  alternates: {
    canonical: "https://zentrader.webtrader.trade/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://zentrader.webtrader.trade/",
    title: "ZenTrader — Diario de Trading y Rastreador de Desafíos",
    description,
    images: ["https://zentrader.webtrader.trade/icon.png"],
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: "ZenTrader — Diario de Trading y Rastreador de Desafíos",
    description:
      "Diario de trading, seguimiento de cuentas y desafíos de prop firms, analítica y coaching automático.",
    images: ["https://zentrader.webtrader.trade/icon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ZenTrader",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Android, iOS, Web",
              description,
              url: "https://zentrader.webtrader.trade/",
              image: "https://zentrader.webtrader.trade/icon.png",
              author: {
                "@type": "Person",
                name: "Airan Bracamonte",
                url: "https://webtrader.trade/",
              },
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
