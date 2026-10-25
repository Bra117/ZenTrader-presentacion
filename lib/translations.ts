export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      guideLink: "¿Cómo reporto un pago?",
      badge: "En desarrollo desde Enero 2026",
    },
    hero: {
      titlePre: "Disciplina real para tu ",
      titleAccent: "trading",
      titlePost: ".",
      lead: "Diario de trading, cuentas y desafíos de prop firm, analítica y coaching automático — en una sola app. Funciona sin conexión desde el primer momento.",
      pills: ["📓 Diario de Trading", "🏆 Desafíos de Prop Firm", "📊 Analítica & Coaching"],
      langPill: "🌐 ES / EN",
      downloadBtn: "📲 Descargar la app",
      soon: "PRÓXIMAMENTE",
      downloadTitle: "Se activa cuando la app esté publicada en las tiendas",
      tryWebBtn: "🖥️ Probar en la web",
      webPageBtn: "🌐 Página Web",
    },
    chart: {
      note: "Vista previa animada — velas generadas al azar, no representan mercado real.",
    },
    concept: {
      title: "Offline-first, online cuando lo necesitas",
      desc: "Toda la app corre localmente con SQLite desde el primer uso. La sincronización en la nube, el perfil público y las funciones premium se activan con la membresía.",
      offline: "Offline",
      online: "Online",
      offlineTitle: "Modo Local",
      offlineDesc:
        "Sin registro, sin servidor. Tus datos viven en SQLite dentro del dispositivo — pruebas la app completa desde el primer minuto.",
      onlineTitle: "Modo Membresía",
      onlineDesc:
        "Sincronización en la nube contra el backend en Node.js + PostgreSQL, perfil público compartible y respaldo automático entre dispositivos.",
    },
    demo: {
      title: "Probá el Quick Log",
      subtitle: "Registro exprés de un trade en segundos",
      win: "✅ WIN",
      loss: "❌ LOSS",
      be: "➖ B/E",
      trades: "trades",
      winRate: "win rate",
      pnl: "P&L simulado",
      hint: "Demo interactiva local — nada se guarda ni se envía a ningún servidor.",
    },
    features: {
      title: "Qué incluye",
      sub: "Construida para traders que quieren llevar control real de su operativa.",
      items: [
        {
          icon: "📓",
          title: "Diario de Trading",
          desc: "Registro detallado por operación: entrada, salida, riesgo, confluencias, emoción. Quick Log para registrar un trade en segundos.",
        },
        {
          icon: "🏆",
          title: "Cuentas & Desafíos",
          desc: "Administra múltiples cuentas y sigue las reglas de desafíos de prop firm (drawdown, objetivo, días mínimos) con salud en tiempo real.",
        },
        {
          icon: "🧠",
          title: "Analítica & Coaching",
          desc: "Insights automáticos, análisis multi-timeframe y logros que refuerzan hábitos de trading saludables.",
        },
        {
          icon: "🔒",
          title: "Seguridad",
          desc: "Login con huella, almacenamiento cifrado y autenticación propia contra un backend en Node.js + PostgreSQL. Sin conexión, el login pasa solo a modo local.",
        },
        {
          icon: "🧮",
          title: "Calculadora de Lote",
          desc: "Lote exacto según capital, % de riesgo y distancia al Stop Loss. En Android, burbuja flotante encima de MT4/MT5 o TradingView y widget de inicio (Kotlin + overlay).",
        },
        {
          icon: "📤",
          title: "Exportación",
          desc: "Exporta tu diario a CSV y genera reportes en PDF listos para compartir.",
        },
        {
          icon: "🎯",
          title: "ZenScore",
          desc: "Nota de 0 a 100 por cuenta que combina rentabilidad (profit factor) y disciplina: riesgo y stop loss, lotaje consistente, sobreoperación/revancha y drawdown. Una sola implementación en Dart para la app y el perfil público, con tests.",
        },
        {
          icon: "🌐",
          title: "Perfil Público",
          desc: "Comparte tu progreso con un perfil público opcional. Verificado con datos del broker: gratis con el reporte de MT4/MT5, o automático conectando tu cuenta en Elite y Unlimited.",
        },
        {
          icon: "🧪",
          title: "Demo y Backtesting",
          desc: "Cuentas Real, Fondeada, Demo y Backtest que nunca se mezclan: el dashboard y las analíticas muestran un tipo a la vez. Un coach evalúa la práctica (¿listo para pasar a real?, ¿la estrategia tiene ventaja?) y, en Elite y Unlimited, el perfil público la muestra con una etiqueta de práctica que decide el servidor y no se puede quitar.",
        },
      ],
    },
    pricing: {
      title: "Niveles de Membresía",
      sub: "Empezá gratis. Subí de nivel a medida que tu operativa crece.",
      note: "El plan Free incluye diario de trading, cuentas y desafíos de prop firm sin costo, para siempre.",
      tiers: [
        {
          icon: "🔓",
          name: "Free",
          featured: false,
          features: ["Diario de trading ilimitado", "Cuentas y seguimiento de desafíos de prop firm", "ZenScore de rentabilidad y disciplina", "Perfil público verificado con el reporte de tu broker", "Cuentas demo y backtesting separadas, con coach", "Consejo de trading diario"],
        },
        {
          icon: "📈",
          name: "Pro",
          featured: false,
          features: ["Todo lo del plan Free", "Analíticas avanzadas de tu rendimiento", "Calculadora de lote ilimitada, burbuja flotante y widget", "Avisos por días sin practicar u operar"],
        },
        {
          icon: "🏅",
          name: "Elite",
          featured: true,
          features: ["Todo lo de Pro", "Logros y gamificación", "Exportar reportes a PDF", "Conexión de solo lectura con tu broker", "Perfil público de demo y backtesting, con etiqueta de práctica"],
        },
        {
          icon: "♾️",
          name: "Unlimited",
          featured: false,
          features: [
            "Todo lo de Elite",
            "Notas ilimitadas",
            "Seguimiento emocional por trade",
            "Análisis multi-timeframe",
            "Acceso ilimitado y sin conexión a toda la App",
          ],
        },
      ],
    },
    footer: {
      credit: "Desarrollado por Airan Bracamonte",
      copyright: "© 2026 Airan Bracamonte. ZenTrader™ — Todos los derechos reservados.",
      code: "🐙 Ver README en GitHub →",
    },
    guia: {
      back: "← Inicio",
      eyebrow: "Guía de usuario",
      title: "Membresías, pagos y modo sin conexión",
      lead: "Lo que cambia entre planes, cómo reportar un pago y qué hacer si se rechaza.",
      unlockTitle: "Qué desbloquea cada nivel",
      unlockNote:
        "Cada plan incluye todo lo del anterior. El monto se carga solo al reportar un pago — no hay que escribirlo a mano.",
      tiers: [
        {
          cls: "tFree",
          name: "Free",
          price: "$0",
          period: "/siempre",
          features: [
            { text: "Diario de trading ilimitado", own: true },
            { text: "Cuentas y desafíos de prop firm", own: true },
            { text: "Modo offline (SQLite)", own: true },
            { text: "ZenScore (rentabilidad + disciplina)", own: true },
            { text: "Perfil verificado con reporte del broker", own: true },
            { text: "Cuentas demo y backtest separadas + coach", own: true },
            { text: "Consejo de trading diario (notificación)", own: true },
          ],
        },
        {
          cls: "tPro",
          name: "Pro",
          price: "$4.99",
          period: "/mes",
          features: [
            { text: "Todo lo de Free", own: false },
            { text: "Net profit, operaciones, win rate", own: true },
            { text: "Curva de equity y mapa de calor", own: true },
            { text: "Rendimiento por confluencia", own: true },
            { text: "Ganancia por hora del día", own: true },
            { text: "Calculadora de lote ilimitada + burbuja y widget", own: true },
            { text: "Avisos a los 2, 7 y 14 días sin operar", own: true },
          ],
        },
        {
          cls: "tElite",
          name: "Elite",
          price: "$9.99",
          period: "/mes",
          features: [
            { text: "Todo lo de Pro", own: false },
            { text: "AI Coach y resto de métricas", own: true },
            { text: "Estadísticas por par y emoción", own: true },
            { text: "Logros y gamificación", own: true },
            { text: "Exportar reportes a PDF", own: true },
            { text: "Conexión de solo lectura con el broker", own: true },
            { text: "Perfil público de demo y backtest (etiquetado)", own: true },
          ],
        },
        {
          cls: "tUnlimited",
          name: "Unlimited",
          price: "$24.99",
          period: "/mes",
          features: [
            { text: "Todo lo de Elite", own: false },
            { text: "Notas ilimitadas", own: true },
            { text: "Seguimiento emocional por trade", own: true },
            { text: "Análisis multi-timeframe", own: true },
            { text: "Analytics activo sin conexión", own: true },
          ],
        },
      ],
      flowTitle: "Reportar un pago, paso a paso",
      flowNote:
        "Aplica a la web y a la APK directa (en la versión de Google Play se paga con Google Play). La revisión es manual — no hay conexión directa con Binance ni con la wallet, así que un administrador confirma cada pago a mano.",
      steps: [
        {
          title: "Elige tu plan",
          pre: "Abre ",
          code1: "Menú → Suscripción",
          mid: " y toca el plan que quieres. El monto exacto se llena solo.",
        },
        {
          title: "Paga por Binance Pay o TRC20",
          plain: "El ID de Binance Pay y la dirección de la wallet TRC20 están en la misma pantalla, con su código QR.",
        },
        {
          title: "Reporta el pago en la app",
          pre: "Toca ",
          code1: "Reportar pago",
          mid: " y pega la referencia o el hash de tu transacción. Queda en estado ",
          code2: "PENDING",
          post: ".",
        },
        {
          title: "Recibes confirmación por correo",
          plain: "Un correo avisa que tu pago está en revisión, con el plan, monto y referencia que reportaste.",
        },
        {
          title: "Un admin lo aprueba o rechaza",
          plain: "Al aprobarlo, tu membresía se activa al instante y te llega un correo confirmándolo.",
        },
      ],
      rejectTag: "Si te rechazan el pago",
      rejectP1:
        "El correo de rechazo explica el motivo e incluye un botón Contactar Soporte. Al tocarlo, se abre tu app de correo con un mensaje ya armado — plan, monto, referencia, fecha y motivo — dirigido directo a soporte.",
      rejectP2:
        "De ahí en adelante es una conversación de correo normal: tú escribes, te responden, se resuelve. No hace falta pedir esos datos por separado — ya van incluidos.",
      offlineTag: "Modo sin conexión",
      offlineP1:
        "El diario de trading, tus cuentas y los desafíos de prop firm siempre funcionan sin internet — eso nunca cambia, sin importar tu plan.",
      offlineAlwaysLabel: "Gratis para siempre",
      offlineAlwaysDesc: "Diario, cuentas, desafíos y modo local (SQLite). No requieren conexión ni membresía.",
      offlineLockedLabel: "Solo con Unlimited",
      offlineLockedDesc:
        "Analytics y el resto de funciones premium siguen activas sin señal — Pro y Elite se bloquean hasta que vuelva la conexión.",
      offlineP2:
        "Para que esto funcione, tu cuenta Unlimited necesita haber iniciado sesión con internet al menos una vez — la app recuerda tu plan aunque después te quedes sin señal.",
      footer:
        "ZenTrader — guía de referencia para usuarios. Los precios y beneficios pueden actualizarse desde el panel de administración.",
    },
  },
  en: {
    nav: {
      guideLink: "How do I report a payment?",
      badge: "In development since January 2026",
    },
    hero: {
      titlePre: "Real discipline for your ",
      titleAccent: "trading",
      titlePost: ".",
      lead: "Trading journal, accounts, and prop firm challenges, analytics and automatic coaching — all in one app. Works offline from the very first moment.",
      pills: ["📓 Trading Journal", "🏆 Prop Firm Challenges", "📊 Analytics & Coaching"],
      langPill: "🌐 ES / EN",
      downloadBtn: "📲 Download the app",
      soon: "COMING SOON",
      downloadTitle: "Activates once the app is published in the app stores",
      tryWebBtn: "🖥️ Try it on the web",
      webPageBtn: "🌐 Website",
    },
    chart: {
      note: "Animated preview — candles are randomly generated and do not represent a real market.",
    },
    concept: {
      title: "Offline-first, online when you need it",
      desc: "The whole app runs locally with SQLite from the very first use. Cloud sync, the public profile, and premium features are unlocked with membership.",
      offline: "Offline",
      online: "Online",
      offlineTitle: "Local Mode",
      offlineDesc:
        "No sign-up, no server. Your data lives in SQLite on your device — you get the full app experience from minute one.",
      onlineTitle: "Membership Mode",
      onlineDesc:
        "Cloud sync against a Node.js + PostgreSQL backend, a shareable public profile, and automatic backup across devices.",
    },
    demo: {
      title: "Try Quick Log",
      subtitle: "Log a trade in seconds",
      win: "✅ WIN",
      loss: "❌ LOSS",
      be: "➖ B/E",
      trades: "trades",
      winRate: "win rate",
      pnl: "simulated P&L",
      hint: "Local interactive demo — nothing is saved or sent to any server.",
    },
    features: {
      title: "What's included",
      sub: "Built for traders who want real control over their trading.",
      items: [
        {
          icon: "📓",
          title: "Trading Journal",
          desc: "Detailed record per trade: entry, exit, risk, confluences, emotion. Quick Log to record a trade in seconds.",
        },
        {
          icon: "🏆",
          title: "Accounts & Challenges",
          desc: "Manage multiple accounts and track prop firm challenge rules (drawdown, target, minimum days) with real-time health.",
        },
        {
          icon: "🧠",
          title: "Analytics & Coaching",
          desc: "Automatic insights, multi-timeframe analysis, and achievements that reinforce healthy trading habits.",
        },
        {
          icon: "🔒",
          title: "Security",
          desc: "Fingerprint login, encrypted storage, and custom authentication against a Node.js + PostgreSQL backend. Offline, login switches to local mode automatically.",
        },
        {
          icon: "🧮",
          title: "Lot Size Calculator",
          desc: "Exact lot size from capital, risk % and Stop Loss distance. On Android, a floating bubble over MT4/MT5 or TradingView and a home screen widget (Kotlin + overlay).",
        },
        {
          icon: "📤",
          title: "Export",
          desc: "Export your journal to CSV and generate ready-to-share PDF reports.",
        },
        {
          icon: "🎯",
          title: "ZenScore",
          desc: "A 0–100 score per account combining profitability (profit factor) and discipline: risk and stop loss, consistent lot sizing, overtrading/revenge trading, and drawdown. One Dart implementation shared by the app and the public profile, with tests.",
        },
        {
          icon: "🌐",
          title: "Public Profile",
          desc: "Share your progress with an optional public profile. Verified with broker data: free with your MT4/MT5 report, or automatic by connecting your account on Elite and Unlimited.",
        },
        {
          icon: "🧪",
          title: "Demo & Backtesting",
          desc: "Real, Funded, Demo and Backtest accounts that never mix: the dashboard and analytics show one type at a time. A coach grades practice (ready to go live? does the strategy have an edge?) and, on Elite and Unlimited, the public profile shows it with a practice label set by the server that can't be removed.",
        },
      ],
    },
    pricing: {
      title: "Membership Tiers",
      sub: "Start for free. Level up as your trading grows.",
      note: "The Free plan includes trading journal, accounts, and prop firm challenges at no cost, forever.",
      tiers: [
        {
          icon: "🔓",
          name: "Free",
          featured: false,
          features: ["Unlimited trading journal", "Accounts and prop firm challenge tracking", "ZenScore for profitability and discipline", "Public profile verified with your broker report", "Separate demo and backtesting accounts, with coach", "Daily trading tip"],
        },
        {
          icon: "📈",
          name: "Pro",
          featured: false,
          features: ["Everything in Free", "Advanced performance analytics", "Unlimited lot calculator, floating bubble and widget", "Alerts after days without practicing or trading"],
        },
        {
          icon: "🏅",
          name: "Elite",
          featured: true,
          features: ["Everything in Pro", "Achievements and gamification", "Export PDF reports", "Read-only connection to your broker", "Public profile for demo and backtesting, with a practice label"],
        },
        {
          icon: "♾️",
          name: "Unlimited",
          featured: false,
          features: [
            "Everything in Elite",
            "Unlimited notes",
            "Emotional tracking per trade",
            "Multi-timeframe analysis",
            "Unlimited offline access to the whole app",
          ],
        },
      ],
    },
    footer: {
      credit: "Built by Airan Bracamonte",
      copyright: "© 2026 Airan Bracamonte. ZenTrader™ — All rights reserved.",
      code: "🐙 View README on GitHub →",
    },
    guia: {
      back: "← Home",
      eyebrow: "User guide",
      title: "Memberships, payments, and offline mode",
      lead: "What changes between plans, how to report a payment, and what to do if it's rejected.",
      unlockTitle: "What each tier unlocks",
      unlockNote:
        "Each plan includes everything from the previous one. The amount is filled in automatically when you report a payment — no need to type it manually.",
      tiers: [
        {
          cls: "tFree",
          name: "Free",
          price: "$0",
          period: "/forever",
          features: [
            { text: "Unlimited trading journal", own: true },
            { text: "Accounts and prop firm challenges", own: true },
            { text: "Offline mode (SQLite)", own: true },
            { text: "ZenScore (profitability + discipline)", own: true },
            { text: "Profile verified with broker report", own: true },
            { text: "Separate demo and backtest accounts + coach", own: true },
            { text: "Daily trading tip (notification)", own: true },
          ],
        },
        {
          cls: "tPro",
          name: "Pro",
          price: "$4.99",
          period: "/mo",
          features: [
            { text: "Everything in Free", own: false },
            { text: "Net profit, trades, win rate", own: true },
            { text: "Equity curve and heatmap", own: true },
            { text: "Performance by confluence", own: true },
            { text: "Profit by hour of day", own: true },
            { text: "Unlimited lot calculator + bubble and widget", own: true },
            { text: "Alerts at 2, 7 and 14 days without trading", own: true },
          ],
        },
        {
          cls: "tElite",
          name: "Elite",
          price: "$9.99",
          period: "/mo",
          features: [
            { text: "Everything in Pro", own: false },
            { text: "AI Coach and remaining metrics", own: true },
            { text: "Stats by pair and emotion", own: true },
            { text: "Achievements and gamification", own: true },
            { text: "Export PDF reports", own: true },
            { text: "Read-only broker connection", own: true },
            { text: "Public demo and backtest profile (labeled)", own: true },
          ],
        },
        {
          cls: "tUnlimited",
          name: "Unlimited",
          price: "$24.99",
          period: "/mo",
          features: [
            { text: "Everything in Elite", own: false },
            { text: "Unlimited notes", own: true },
            { text: "Emotional tracking per trade", own: true },
            { text: "Multi-timeframe analysis", own: true },
            { text: "Active offline analytics", own: true },
          ],
        },
      ],
      flowTitle: "Reporting a payment, step by step",
      flowNote:
        "Applies to the web and the direct APK (the Google Play version is paid through Google Play). Review is manual — there's no direct connection to Binance or the wallet, so an admin confirms every payment by hand.",
      steps: [
        {
          title: "Choose your plan",
          pre: "Open ",
          code1: "Menu → Subscription",
          mid: " and tap the plan you want. The exact amount fills in automatically.",
        },
        {
          title: "Pay via Binance Pay or TRC20",
          plain: "The Binance Pay ID and the TRC20 wallet address are on the same screen, along with their QR code.",
        },
        {
          title: "Report the payment in the app",
          pre: "Tap ",
          code1: "Report payment",
          mid: " and paste your transaction's reference or hash. It's set to ",
          code2: "PENDING",
          post: ".",
        },
        {
          title: "You receive email confirmation",
          plain: "An email lets you know your payment is under review, with the plan, amount, and reference you reported.",
        },
        {
          title: "An admin approves or rejects it",
          plain: "Once approved, your membership activates instantly and you get a confirmation email.",
        },
      ],
      rejectTag: "If your payment is rejected",
      rejectP1:
        "The rejection email explains the reason and includes a Contact Support button. Tapping it opens your email app with a message already drafted — plan, amount, reference, date, and reason — addressed directly to support.",
      rejectP2:
        "From there it's a normal email conversation: you write, they reply, it gets resolved. No need to ask for that info separately — it's already included.",
      offlineTag: "Offline mode",
      offlineP1:
        "The trading journal, your accounts, and prop firm challenges always work without internet — that never changes, no matter your plan.",
      offlineAlwaysLabel: "Free forever",
      offlineAlwaysDesc: "Journal, accounts, challenges, and local mode (SQLite). No connection or membership required.",
      offlineLockedLabel: "Unlimited only",
      offlineLockedDesc:
        "Analytics and the rest of the premium features stay active without a signal — Pro and Elite lock until the connection returns.",
      offlineP2:
        "For this to work, your Unlimited account needs to have logged in with internet at least once — the app remembers your plan even if you later lose signal.",
      footer: "ZenTrader — reference guide for users. Prices and benefits may be updated from the admin panel.",
    },
  },
} as const;
