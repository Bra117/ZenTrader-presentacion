"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { useT } from "@/lib/LanguageContext";

type Candle = { open: number; close: number; high: number; low: number };

export default function LiveCandlestickChart() {
  const t = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [price, setPrice] = useState(2384.2);
  const [priceColor, setPriceColor] = useState<"up" | "down">("up");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let candles: Candle[] = [];
    let currentPrice = 2384.2;
    const maxCandles = 46;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = 220 * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function nextCandle() {
      const open = currentPrice;
      const vol = 3 + Math.random() * 7;
      const dir = Math.random() > 0.47 ? 1 : -1;
      const close = open + dir * vol * Math.random();
      const high = Math.max(open, close) + Math.random() * vol * 0.6;
      const low = Math.min(open, close) - Math.random() * vol * 0.6;
      currentPrice = close;
      candles.push({ open, close, high, low });
      if (candles.length > maxCandles) candles.shift();
    }

    function seed() {
      candles = [];
      for (let i = 0; i < maxCandles; i++) nextCandle();
    }

    function draw() {
      const w = canvas!.getBoundingClientRect().width;
      const h = 220;
      ctx!.clearRect(0, 0, w, h);
      const all = candles.flatMap((c) => [c.high, c.low]);
      const max = Math.max(...all);
      const min = Math.min(...all);
      const pad = 16;
      const cw = w / maxCandles;
      const scaleY = (h - pad * 2) / (max - min || 1);

      candles.forEach((c, i) => {
        const x = i * cw + cw / 2;
        const up = c.close >= c.open;
        ctx!.strokeStyle = up ? "#2be6b8" : "#ff6b6b";
        ctx!.fillStyle = up ? "rgba(43,230,184,.85)" : "rgba(255,107,107,.85)";
        ctx!.lineWidth = 1;
        const yHigh = h - pad - (c.high - min) * scaleY;
        const yLow = h - pad - (c.low - min) * scaleY;
        ctx!.beginPath();
        ctx!.moveTo(x, yHigh);
        ctx!.lineTo(x, yLow);
        ctx!.stroke();
        const yOpen = h - pad - (c.open - min) * scaleY;
        const yClose = h - pad - (c.close - min) * scaleY;
        const bodyTop = Math.min(yOpen, yClose);
        const bodyH = Math.max(2, Math.abs(yClose - yOpen));
        ctx!.fillRect(x - cw * 0.28, bodyTop, cw * 0.56, bodyH);
      });
    }

    function handleResize() {
      resize();
      draw();
    }

    resize();
    seed();
    draw();
    setPrice(currentPrice);

    window.addEventListener("resize", handleResize);

    const intervalId = setInterval(() => {
      nextCandle();
      draw();
      setPrice(currentPrice);
      const last = candles[candles.length - 1];
      setPriceColor(last.close >= last.open ? "up" : "down");
    }, 1400);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Reveal className="chart-card">
      <div className="chart-head">
        <span className="pair">
          <span className="live-dot" />
          XAU/USD
        </span>
        <span className="price" style={{ color: priceColor === "up" ? "#2be6b8" : "#ff6b6b" }}>
          {price.toFixed(2)}
        </span>
      </div>
      <canvas id="chart" ref={canvasRef} />
      <div className="chart-note">{t.chart.note}</div>
    </Reveal>
  );
}
