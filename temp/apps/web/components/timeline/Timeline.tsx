export default function Timeline() {
  return (
    <div
      style={{
        marginTop: 30,
        background: "var(--bs-surface)",
        borderRadius: "var(--radius)",
        padding: 25,
      }}
    >
      <h2>📜 Timeline</h2>

      <ul
        style={{
          marginTop: 20,
          lineHeight: 2,
        }}
      >
        <li>✔ Sistema iniciado</li>
        <li>✔ Heartbeat ONLINE</li>
      </ul>
    </div>
  );
}