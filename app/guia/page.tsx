import type { Metadata } from "next";
import GuiaContent from "@/components/GuiaContent";

export const metadata: Metadata = {
  title: "ZenTrader — Guía de Membresías",
  description: "Qué desbloquea cada plan, cómo reportar un pago y cómo funciona el modo sin conexión en ZenTrader.",
};

export default function GuiaPage() {
  return <GuiaContent />;
}
