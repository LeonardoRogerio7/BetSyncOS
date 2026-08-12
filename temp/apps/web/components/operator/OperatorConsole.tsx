"use client";

import { useEffect, useState } from "react";

import {
  getOperatorMessage,
  getSessionGreeting,
  OperatorState,
} from "./OperatorBrain";

import { rememberEvent } from "./OperatorMemory";
import { getOperatorContext } from "./OperatorContext";

const states: OperatorState[] = [
  "monitoring",
  "analyzing",
  "idle",
];

export default function OperatorConsole() {
  const [state, setState] =
    useState<OperatorState>("monitoring");

    const [sessionGreeting, setSessionGreeting] = useState(
  "Inicializando minha memória operacional..."
);

    useEffect(() => {
  const context = getOperatorContext();

  setSessionGreeting(
    getSessionGreeting(
      context.isFirstSession,
      context.eventCount
    )
  );

  if (context.isFirstSession) {
    rememberEvent(
      "system_started",
      "Sentinel iniciou sua primeira sessão operacional."
    );
  } else {
    rememberEvent(
      "system_returned",
      "Sentinel reconheceu o retorno do operador."
    );
  }
}, []);

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
       {sessionGreeting}
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