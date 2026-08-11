export default function Header() {
  const now = new Date();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 30px",
        borderBottom: "1px solid #1f2937",
        marginBottom: "30px",
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>BetSync OS</h1>

        <small style={{ color: "#94a3b8" }}>
          Mission Control Center
        </small>
      </div>

      <div style={{ textAlign: "right" }}>
        <div
          style={{
            color: "#22C55E",
            fontWeight: "bold",
          }}
        >
          🟢 ONLINE
        </div>

        <small>{now.toLocaleTimeString()}</small>
      </div>
    </header>
  );
}