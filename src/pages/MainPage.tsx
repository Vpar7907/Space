import React from "react";
import GoogleTools from "../components/GoogleTools";

import GreetPanel from "../components/GreetPanel";

import Task from "../components/Task";

export default function MainPage() {
  return (
    <>
    <div className="bg-zinc-300 relative bg-cover max-h-screen min-h-screen flex flex-col justify-between overflow-hidden">
        <GreetPanel />
        <GoogleTools />
        <Task
        />
      </div>
    </>
  )
}
