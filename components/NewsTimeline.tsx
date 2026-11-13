"use client";

import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

/** Novedades de la app: línea de tiempo con las últimas versiones. */
export default function NewsTimeline() {
  const t = useT();
  return (
    <>
      <h2 className="section-title">{t.news.title}</h2>
      <p className="section-sub">{t.news.sub}</p>
      <ol className="news">
        {t.news.items.map((n, i) => (
          <Reveal key={n.version}>
            <li className={`news-item ${i === 0 ? "latest" : ""}`}>
              <span className="news-dot" aria-hidden="true" />
              <div className="news-card">
                <div className="news-head">
                  <span className="news-version">v{n.version}</span>
                  <h3>{n.title}</h3>
                </div>
                <ul>
                  {n.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
