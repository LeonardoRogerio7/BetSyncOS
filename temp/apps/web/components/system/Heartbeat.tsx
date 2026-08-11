"use client";

import { useEffect, useState } from "react";

export default function Heartbeat() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setOnline((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span
      style={{
        color: online ? "#22C55E" : "#16A34A",
        fontWeight: "bold",
        transition: "0.3s",
      }}
    >
      {online ? "🟢 ONLINE" : "💚 ONLINE"}
    </span>
  );
}