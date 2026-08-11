"use client";

import Header from "../components/layout/Header";
import Dashboard from "../components/dashboard/Dashboard";
import MissionCockpit from "../components/cockpit/MissionCockpit";
import Timeline from "../components/timeline/Timeline";

export default function Home() {
  return (
    <>
      <Header />

      <Dashboard />

      <MissionCockpit />

      <Timeline />
    </>
  );
}