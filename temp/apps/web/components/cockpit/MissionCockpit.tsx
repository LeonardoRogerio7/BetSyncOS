export default function MissionCockpit() {
  return (
    <div
      style={{
        marginTop: 30,
        background: "var(--bs-surface)",
        borderRadius: "var(--radius)",
        padding: 25,
      }}
    >
      <h2>🎯 Mission Cockpit</h2>

      <p
        style={{
          color: "var(--bs-muted)",
        }}
      >
        Nenhuma missão ativa no momento.
      </p>
    </div>
  );
}