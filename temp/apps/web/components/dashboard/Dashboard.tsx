import StatusCard from "../cards/StatusCard";
import type { OperatorState } from "../operator/OperatorBrain";

interface DashboardProps {
  sentinelState: OperatorState;
}

export default function Dashboard({
  sentinelState,
}: DashboardProps) {
  const sentinelLabels: Record<OperatorState, string> = {
    monitoring: "Monitorando",
    analyzing: "Analisando",
    alert: "Atenção",
    idle: "Em espera",
  };

  const sentinelStatus = sentinelLabels[sentinelState];

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        marginTop: 30,
        flexWrap: "wrap",
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
        value={sentinelStatus}
      />
    </div>
  );
}