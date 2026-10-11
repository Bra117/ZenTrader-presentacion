"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

export default function ModeToggle() {
  const t = useT();
  const [mode, setMode] = useState<"offline" | "online">("offline");

  return (
    <Reveal className="concept">
      <div className="concept-top">
        <div>
          <h2>{t.concept.title}</h2>
          <p className="desc">{t.concept.desc}</p>
        </div>
        <div className="switch" role="tablist" aria-label="App mode">
          <button className={mode === "offline" ? "active" : ""} onClick={() => setMode("offline")}>
            {t.concept.offline}
          </button>
          <button className={mode === "online" ? "active" : ""} onClick={() => setMode("online")}>
            {t.concept.online}
          </button>
        </div>
      </div>
      <div className="concept-panels">
        <div className={`panel ${mode === "offline" ? "show" : ""}`}>
          <div className="glyph">📴</div>
          <div>
            <h4>{t.concept.offlineTitle}</h4>
            <p>{t.concept.offlineDesc}</p>
          </div>
        </div>
        <div className={`panel ${mode === "online" ? "show" : ""}`}>
          <div className="glyph">☁️</div>
          <div>
            <h4>{t.concept.onlineTitle}</h4>
            <p>{t.concept.onlineDesc}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
