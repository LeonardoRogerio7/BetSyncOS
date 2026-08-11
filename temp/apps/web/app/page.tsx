"use client";

import Header from "../components/layout/Header";
import StatusCard from "../components/cards/StatusCard";
import MissionCockpit from "../components/cockpit/MissionCockpit";
import Timeline from "../components/timeline/Timeline";

export default function Home() {
  return (
    <>
      <Header />

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

      <MissionCockpit />

      <Timeline />
    </>
  );
}