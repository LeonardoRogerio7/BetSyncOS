type StatusCardProps = {
  icon: string;
  title: string;
  value: string;
  color?: string;
};

export default function StatusCard({
  icon,
  title,
  value,
  color = "#22C55E",
}: StatusCardProps) {
  return (
    <div
      style={{
        background: "#151F35",
        borderRadius: 18,
        padding: 24,
        minWidth: 220,
      }}
    >
      <h3 style={{ marginBottom: 16 }}>
        {icon} {title}
      </h3>

      <h2
        style={{
          color,
          margin: 0,
        }}
      >
        {value}
      </h2>
    </div>
  );
}