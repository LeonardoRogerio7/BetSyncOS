"use client";

import { useEffect, useState } from "react";

import Header from "../components/layout/Header";
import StatusCard from "../components/cards/StatusCard";
import MissionCockpit from "../components/cockpit/MissionCockpit";
import Timeline from "../components/timeline/Timeline";

export default function Home() {
  const [heartbeat, setHeartbeat] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeartbeat((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 48 }}>BetSync OS</h1>

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
          value={heartbeat ? "ONLINE" : "ONLINE"}
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
    <Header />
  </main>
);
}