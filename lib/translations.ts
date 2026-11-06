export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
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
      storeSmall: "Disponible en",
      storeSoon: "PRÓXIMAMENTE",
      storeTitle: "Pronto estará publicada en Google Play",
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
          desc: "Nota de 0 a 100 por cuenta que combina rentabilidad (profit factor) y disciplina: riesgo y stop loss, lotaje consistente, cumplimiento del plan de trading y drawdown. Una sola implementación en Dart para la app y el perfil público, con tests.",
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
        {
          icon: "🔔",
          title: "Recordatorios de práctica",
          desc: "Notificaciones locales programadas en el teléfono (sin servidor): avisos a los 2, 7 y 14 días sin registrar en backtest, demo o real (fondeada: 25, por la regla de inactividad de las firmas), con días basados en estudios de hábitos y pérdida de habilidades. Se reprograman al abrir la app o registrar un trade. Consejo diario para todos; los avisos, desde Pro.",
        },
        {
          icon: "📏",
          title: "Plan de Trading",
          desc: "Reglas contra la sobreoperación para todas las cuentas: operaciones por día, % de riesgo, pérdida diaria máxima y parar tras pérdidas seguidas. Al registrar un trade que rompe el plan avisa sin bloquear; el coach mide el cumplimiento (últimas 50 operaciones, por fecha del gráfico en backtest) y el ZenScore lo penaliza. Plan recomendado para todos, personalizable en Elite; se guarda en la nube y el perfil público usa el mismo plan.",
        },
        {
          icon: "🧠",
          title: "Mis Estrategias",
          desc: "Estrategias con nombre, descripción y checklist de entrada reordenable; al registrar un trade se elige (o se crea al momento), se marca el checklist y la app califica la ejecución de A a D. Estadísticas por estrategia en todas las cuentas desde Pro, y aviso de operaciones registradas sin estrategia. El servidor valida nombres únicos y, al renombrar, actualiza los trades.",
        },
        {
          icon: "🔗",
          title: "Notas relacionadas",
          desc: "Una nota se relaciona con operaciones de cualquier cuenta (real, fondeada, demo, backtest) desde un selector con filtros, y muestra su resumen (cantidad, % ganadas, resultado). Funciona offline: los ids locales se remapean al subir los trades.",
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
          features: ["Diario de trading ilimitado", "Cuentas y seguimiento de desafíos de prop firm", "ZenScore de rentabilidad y disciplina", "Perfil público verificado con el reporte de tu broker", "Cuentas demo y backtesting separadas, con coach", "Consejo de trading diario", "Plan de trading recomendado con avisos de sobreoperación", "Tus estrategias con su checklist"],
        },
        {
          icon: "📈",
          name: "Pro",
          featured: false,
          features: ["Todo lo del plan Free", "Analíticas avanzadas de tu rendimiento", "Calculadora de lote ilimitada, burbuja flotante y widget", "Avisos por días sin practicar u operar", "Estadísticas por estrategia"],
        },
        {
          icon: "🏅",
          name: "Elite",
          featured: true,
          features: ["Todo lo de Pro", "Logros y gamificación", "Exportar reportes a PDF", "Conexión de solo lectura con tu broker", "Perfil público de demo y backtesting, con etiqueta de práctica", "Plan de trading personalizado (cuenta en tu ZenScore)"],
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
  },
  en: {
    nav: {
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
      storeSmall: "Get it on",
      storeSoon: "COMING SOON",
      storeTitle: "Coming soon to Google Play",
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
          desc: "A 0–100 score per account combining profitability (profit factor) and discipline: risk and stop loss, consistent lot sizing, trading-plan compliance, and drawdown. One Dart implementation shared by the app and the public profile, with tests.",
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
        {
          icon: "🔔",
          title: "Practice reminders",
          desc: "Local notifications scheduled on the phone (no server): alerts at 2, 7 and 14 days without logging in backtest, demo or live (funded: 25, because of prop firms' inactivity rules), with days based on habit and skill-decay research. They are rescheduled when the app opens or a trade is logged. Daily tip for everyone; alerts from Pro up.",
        },
        {
          icon: "📏",
          title: "Trading Plan",
          desc: "Anti-overtrading rules for every account: trades per day, % risk, max daily loss and stopping after a losing streak. Logging a trade that breaks the plan warns without blocking; the coach measures compliance (last 50 trades, by chart date in backtest) and the ZenScore penalizes it. Recommended plan for everyone, customizable on Elite; stored in the cloud and the public profile uses the same plan.",
        },
        {
          icon: "🧠",
          title: "My Strategies",
          desc: "Strategies with a name, description and a reorderable entry checklist; logging a trade picks one (or creates it on the spot), ticks the checklist and grades execution A to D. Per-strategy stats across every account from Pro up, plus a warning for trades logged without a strategy. The server enforces unique names and renames update existing trades.",
        },
        {
          icon: "🔗",
          title: "Linked notes",
          desc: "A note links to trades from any account (live, funded, demo, backtest) through a filterable picker and shows their summary (count, win rate, result). Works offline: local ids are remapped when trades upload.",
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
          features: ["Unlimited trading journal", "Accounts and prop firm challenge tracking", "ZenScore for profitability and discipline", "Public profile verified with your broker report", "Separate demo and backtesting accounts, with coach", "Daily trading tip", "Recommended trading plan with overtrading alerts", "Your strategies with their checklist"],
        },
        {
          icon: "📈",
          name: "Pro",
          featured: false,
          features: ["Everything in Free", "Advanced performance analytics", "Unlimited lot calculator, floating bubble and widget", "Alerts after days without practicing or trading", "Per-strategy stats"],
        },
        {
          icon: "🏅",
          name: "Elite",
          featured: true,
          features: ["Everything in Pro", "Achievements and gamification", "Export PDF reports", "Read-only connection to your broker", "Public profile for demo and backtesting, with a practice label", "Custom trading plan (counts toward your ZenScore)"],
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
  },
} as const;
