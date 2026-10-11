"use client";

import Link from "next/link";
import { useT } from "@/lib/LanguageContext";

export default function Header() {
  const t = useT();
  return (
    <header className="nav">
      <div className="brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.png" alt="ZenTrader" />
        ZenTrader
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/guia/" style={{ fontSize: 13, color: "var(--text-dim)", textDecoration: "none" }}>
          {t.nav.guideLink}
        </Link>
        <span className="badge">{t.nav.badge}</span>
      </div>
    </header>
  );
}
