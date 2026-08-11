"use client";

import { useEffect, useState } from "react";
import Heartbeat from "../system/Heartbeat";

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

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
        <h1 style={{ margin: 0 }}>
          BetSync OS
        </h1>

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
          <Heartbeat />
        </div>

        <small>
          {currentTime ?? "--:--:--"}
        </small>
      </div>
    </header>
  );
}