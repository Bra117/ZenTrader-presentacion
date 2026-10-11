const TECHS = ["Flutter", "Dart", "Provider", "SQLite", "Node.js", "Express", "PostgreSQL", "JWT"];

export default function TechStack() {
  return (
    <div className="stack">
      {TECHS.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
