import React, { useRef, useEffect } from "react";
import MenuList from "./MenuList";

interface Props {
  open: boolean;
  handleOpen(arg: boolean): any;
}

function Menu({ open, handleOpen }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const menu = menuRef.current;
    const bg = bgRef.current;
    if (open) {
      menu?.classList.add("active");
      bg?.classList.add("active");
      return;
    } else if (!open) {
      menu?.classList.remove("active");
      bg?.classList.remove("active");
      return;
    }
  }, [menuRef, open]);

  return (
    <>
      <div
        ref={menuRef}
        className="bg-purple-900 sideBar rounded z-50 w-[100px] min-h-screen min-w-[400px] absolute flex flex-col "
      >
        <MenuList />
      </div>
      <div
        ref={bgRef}
        className="min-h-screen min-w-screen w-screen h-screen bgm absolute"
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          event.preventDefault();
          handleOpen(false);
        }}
      ></div>
    </>
  );
}

export default Menu;
