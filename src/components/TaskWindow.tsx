import React from "react";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export default function TaskWindow({
  children,
  width = "200px",
  height = "500px",
}: Props) {
  return (
    <div
      style={{ width: width, height: height }}
      className=" z-50 bg-purple-900 overflow-y-hidden text-white rounded-xl shadow-sm shadow-zinc-700 mx-[20px] overflow-hidden my-5"
    >
      {children}
    </div>
  );
}
