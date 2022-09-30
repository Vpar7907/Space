import React from "react";

interface Props {
  newDesk(): void;
}

export default function NewDesk({ newDesk }: Props) {
  return (
    <div
      onClick={() => {
        newDesk();
      }}
      className="text-6xl text-gray-700 font-thin w-[240px] bg-gray-500 my-5 bg-opacity-20 min-w-[240px] mr-4 h-[320px] flex justify-center items-center rounded-xl border-2 border-neutral-500 cursor-pointer border-dashed transition-all hover:border-solid hover:bg-black hover:bg-opacity-20 hover:w-[300px] hover:min-w-[270px] hover:h-[400px] hover:text-7xl"
    >
      +
    </div>
  );
}
