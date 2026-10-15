const TECHS = ["Flutter", "Dart", "Provider", "SQLite", "Kotlin", "Google Play Billing", "Node.js", "Express", "PostgreSQL", "JWT", "nginx", "Cloudflare"];

export default function TechStack() {
  return (
    <div className="stack">
      {TECHS.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
