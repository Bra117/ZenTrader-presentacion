"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

type Stats = { trades: number; wins: number; pnl: number };

export default function QuickLogDemo() {
  const t = useT();
  const [stats, setStats] = useState<Stats>({ trades: 0, wins: 0, pnl: 0 });

  function logTrade(kind: "win" | "loss" | "be") {
    setStats((prev) => {
      let delta = 0;
      let winsDelta = 0;
      if (kind === "win") {
        winsDelta = 1;
        delta = Math.round(20 + Math.random() * 120);
      } else if (kind === "loss") {
        delta = -Math.round(15 + Math.random() * 90);
      }
      return {
        trades: prev.trades + 1,
        wins: prev.wins + winsDelta,
        pnl: prev.pnl + delta,
      };
    });
  }

  const winRate = stats.trades ? `${Math.round((stats.wins / stats.trades) * 100)}%` : "—";
  const pnlPositive = stats.pnl >= 0;
  const pnlText = stats.trades === 0 ? "$0" : `${pnlPositive ? "+$" : "-$"}${Math.abs(stats.pnl)}`;

  return (
    <Reveal className="demo-card">
      <div className="demo-head">
        <h2>{t.demo.title}</h2>
        <span>{t.demo.subtitle}</span>
      </div>
      <div className="demo-body">
        <div className="qlog-buttons">
          <button className="win" onClick={() => logTrade("win")}>
            {t.demo.win}
          </button>
          <button className="loss" onClick={() => logTrade("loss")}>
            {t.demo.loss}
          </button>
          <button className="be" onClick={() => logTrade("be")}>
            {t.demo.be}
          </button>
        </div>
        <div className="qlog-stats">
          <div className="qstat">
            <b>{stats.trades}</b>
            <span>{t.demo.trades}</span>
          </div>
          <div className="qstat">
            <b>{winRate}</b>
            <span>{t.demo.winRate}</span>
          </div>
          <div className="qstat pnl">
            <b className={pnlPositive ? "pos" : "neg"}>{pnlText}</b>
            <span>{t.demo.pnl}</span>
          </div>
        </div>
      </div>
      <div className="qlog-hint">{t.demo.hint}</div>
    </Reveal>
  );
}
