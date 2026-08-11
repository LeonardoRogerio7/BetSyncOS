"use client";

import { useEffect, useState } from "react";
import {
  getOperatorMessage,
  OperatorState,
} from "./OperatorBrain";

const states: OperatorState[] = [
  "monitoring",
  "analyzing",
  "idle",
];

export default function OperatorConsole() {
  const [state, setState] =
    useState<OperatorState>("monitoring");

  useEffect(() => {
  let index = 0;

  const timer = setInterval(() => {
    index = (index + 1) % states.length;

    const nextState = states[index];

    if (nextState) {
      setState(nextState);
    }
  }, 6000);

  return () => clearInterval(timer);
}, []);

  const operator = getOperatorMessage(state);

  return (
    <div
      style={{
        background: "#151D2F",
        border: "1px solid #26324D",
        borderRadius: 16,
        padding: 24,
        marginBottom: 24,
        transition: "all .4s",
      }}
    >
      <h2>{operator.title}</h2>

      <p
        style={{
          lineHeight: 1.8,
          fontSize: 18,
        }}
      >
        {operator.message}
      </p>

      <strong
        style={{
          color:
            state === "alert"
              ? "#ef4444"
              : state === "analyzing"
              ? "#eab308"
              : "#22C55E",
        }}
      >
        {operator.status}
      </strong>
    </div>
  );
}