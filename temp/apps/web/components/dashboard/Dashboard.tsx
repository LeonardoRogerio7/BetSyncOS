import StatusCard from "../cards/StatusCard";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        marginTop: 30,
      }}
    >
      <StatusCard
        icon="❤️"
        title="Heartbeat"
        value="ONLINE"
      />

      <StatusCard
        icon="⚽"
        title="Mercados"
        value="0"
      />

      <StatusCard
        icon="🎯"
        title="Missões"
        value="0"
      />

      <StatusCard
        icon="🛰️"
        title="Sentinel"
        value="Inicializando..."
      />
    </div>
  );
}