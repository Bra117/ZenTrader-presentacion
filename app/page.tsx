"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveCandlestickChart from "@/components/LiveCandlestickChart";
import ModeToggle from "@/components/ModeToggle";
import QuickLogDemo from "@/components/QuickLogDemo";
import FeaturesGrid from "@/components/FeaturesGrid";
import MembershipTiers from "@/components/MembershipTiers";
import TechStack from "@/components/TechStack";
import { useT } from "@/lib/LanguageContext";

export default function Home() {
  const t = useT();
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <LiveCandlestickChart />
      <ModeToggle />
      <QuickLogDemo />
      <FeaturesGrid />
      <MembershipTiers />
      <TechStack />
      <footer>
        <span>{t.footer.credit}</span>
        <a href="https://github.com/Bra117/ZenTrader-showcase#readme" target="_blank" rel="noopener">
          {t.footer.code}
        </a>
        <small className="footer-copy">{t.footer.copyright}</small>
      </footer>
    </div>
  );
}
