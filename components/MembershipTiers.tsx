"use client";

import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

export default function MembershipTiers() {
  const t = useT();
  return (
    <>
      <h2 className="section-title">{t.pricing.title}</h2>
      <p className="section-sub">{t.pricing.sub}</p>
      <div className="pricing-grid">
        {t.pricing.tiers.map((tier) => (
          <Reveal key={tier.name} className={`plan ${tier.featured ? "featured" : ""}`}>
            <div className="icn">{tier.icon}</div>
            <div className="plan-name">{tier.name}</div>
            <ul className="plan-features">
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <p className="plan-note">{t.pricing.note}</p>
    </>
  );
}
