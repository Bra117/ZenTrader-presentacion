# ZenTrader — Presentación del proyecto

Sitio de presentación de **ZenTrader**, una app para traders que reúne en un solo lugar el diario de trading, las cuentas y desafíos de prop firm, la analítica y un coaching automático. Funciona sin conexión desde el primer momento (SQLite en el dispositivo) y sincroniza en la nube con la membresía.

🌐 **En vivo:** https://zentrader.webtrader.trade
🖥️ **Probar la app en la web:** https://zentrader.webtrader.trade/app/
📄 **Vista general del proyecto:** [ZenTrader-showcase](https://github.com/Bra117/ZenTrader-showcase)

> El código fuente de la app y del backend es privado. Este repositorio contiene solo la página de presentación.

## Qué muestra

- Las funciones principales: diario de trading, desafíos de prop firm, analítica, coaching y recordatorios de práctica.
- Un gráfico de velas animado y una demo del **Quick Log** (registrar un trade en segundos).
- El concepto *offline-first*: modo local sin registro y modo membresía con sincronización.
- Los planes de membresía y una guía para reportar pagos (`/guia/`).
- Las tecnologías con las que está construida la app.
- Español / inglés con un botón.

## Tecnologías del sitio

- [Next.js](https://nextjs.org) 16 (App Router) con exportación estática (`output: "export"`)
- React 19 + TypeScript

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # genera el sitio estático en out/
```

Los textos (ES/EN) están en `lib/translations.ts`; los componentes, en `components/`; la guía de pagos, en `app/guia/`.

## Publicación

`npm run build` genera `out/`, que se copia a la raíz del dominio. La app web de ZenTrader vive aparte, en `/app/`, y no se toca al publicar este sitio.

---

Desarrollado por **Airan Bracamonte** · [LinkedIn](https://www.linkedin.com/in/airan-bracamonte)
