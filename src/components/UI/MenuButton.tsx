import { SetState } from "immer/dist/internal";
import React from "react";
interface Props {
  openMenu(val: boolean): any;
  open: boolean;
}
export default function MenuButton({ open, openMenu }: Props) {
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    openMenu(!open);
  };
  return (
    <div
      className="text-center pt-auto shadow-md flex justify-center items-center content-center text-neutral-300 bold m-10 w-10 h-10 rounded-full cursor-pointer bg-emerald-800 absolute z-40 "
      onClick={handleOnClick}
    >
      <p className="transition-all duration-500 hover:rotate-180">&#9776;</p>
    </div>
  );
}
