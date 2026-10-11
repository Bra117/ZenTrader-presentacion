"use client";

import Link from "next/link";
import styles from "@/app/guia/guia.module.css";
import { useT } from "@/lib/LanguageContext";

const TIER_CLASS: Record<string, string> = {
  tFree: styles.tFree,
  tPro: styles.tPro,
  tElite: styles.tElite,
  tUnlimited: styles.tUnlimited,
};

export default function GuiaContent() {
  const t = useT().guia;

  return (
    <div className={styles.wrap}>
      <header className={styles.nav}>
        <div className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="ZenTrader" />
          ZenTrader
        </div>
        <Link className={styles.back} href="/">
          {t.back}
        </Link>
      </header>

      <div className={styles.pageHead}>
        <div className={styles.eyebrow}>{t.eyebrow}</div>
        <h1>{t.title}</h1>
        <p className={styles.lead}>{t.lead}</p>
      </div>

      <section className={styles.section}>
        <h2>{t.unlockTitle}</h2>
        <p className={styles.sectionNote}>{t.unlockNote}</p>
        <div className={styles.pricingGrid}>
          {t.tiers.map((tier) => (
            <div key={tier.name} className={`${styles.plan} ${TIER_CLASS[tier.cls]}`}>
              <div>
                <div className={styles.planName}>{tier.name}</div>
                <div className={styles.planPrice}>
                  {tier.price}
                  <span> {tier.period}</span>
                </div>
              </div>
              <ul className={styles.planFeatures}>
                {tier.features.map((f) => (
                  <li key={f.text} className={f.own ? styles.own : ""}>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t.flowTitle}</h2>
        <p className={styles.sectionNote}>{t.flowNote}</p>
        <div className={styles.flow}>
          {t.steps.map((s, i) => (
            <div className={styles.step} key={s.title}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>
                  {"pre" in s ? s.pre : null}
                  {"code1" in s ? <code className={styles.code}>{s.code1}</code> : null}
                  {"mid" in s ? s.mid : null}
                  {"code2" in s ? <code className={styles.code}>{s.code2}</code> : null}
                  {"post" in s ? s.post : null}
                  {"plain" in s ? s.plain : null}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.callout} ${styles.reject}`}>
          <span className={styles.tag}>{t.rejectTag}</span>
          <p>{t.rejectP1}</p>
          <p className={styles.dim}>{t.rejectP2}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.callout} ${styles.offline}`}>
          <span className={styles.tag}>{t.offlineTag}</span>
          <p>{t.offlineP1}</p>
          <div className={styles.offlineGrid}>
            <div className={`${styles.offlineBox} ${styles.always}`}>
              <div className={styles.label}>{t.offlineAlwaysLabel}</div>
              <p>{t.offlineAlwaysDesc}</p>
            </div>
            <div className={`${styles.offlineBox} ${styles.locked}`}>
              <div className={styles.label}>{t.offlineLockedLabel}</div>
              <p>{t.offlineLockedDesc}</p>
            </div>
          </div>
          <p className={styles.dim} style={{ marginTop: 14 }}>
            {t.offlineP2}
          </p>
        </div>
      </section>

      <footer className={styles.footer}>{t.footer}</footer>
    </div>
  );
}
