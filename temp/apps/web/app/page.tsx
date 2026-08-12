"use client";

import { useState } from "react";

import OperatorConsole from "../components/operator/OperatorConsole";
import Dashboard from "../components/dashboard/Dashboard";
import MissionCockpit from "../components/cockpit/MissionCockpit";
import Timeline from "../components/timeline/Timeline";

import type { OperatorState } from "../components/operator/OperatorBrain";

export default function Home() {
  const [operatorState, setOperatorState] =
    useState<OperatorState>("monitoring");

  return (
    <>
      <OperatorConsole
        state={operatorState}
        onStateChange={setOperatorState}
      />

      <Dashboard
        sentinelState={operatorState}
      />

      <MissionCockpit />

      <Timeline />
    </>
  );
}