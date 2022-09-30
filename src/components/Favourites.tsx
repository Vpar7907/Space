import React from "react";
import ModalWindow from "./ModalWindow";
import TaskWindow from "./TaskWindow";
import CloseButton from "./UI/CloseButton";
import TaskItem from "./TaskItem";



import StarButton from "./UI/StarButton";

interface Props {
  close(): void;
  handleSelect(a: number): void;
  favourites: boolean
}

export default function Favourites({ close, handleSelect, favourites }: Props) {
 


  const handleClose = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    close();
  };
  return (
    <>
      <StarButton openFavourites={close} />
    {favourites ?  <ModalWindow close={close}>
        <TaskWindow width={"600px"} height={"600px"}>
          <div className="flex justify-between px-3 items-center border-b border-y-zinc-200 content-center max-h-11 mx-2">
            <h2 className="pl-8 my-3 text-center w-[85%] text-lg font-thin">
              Избранное
            </h2>
            <div className="text-right mt-[5px]">
              <CloseButton handleClose={handleClose} />
            </div>
          </div>
          <div className="m-0">
            <TaskItem
              type="_favourite"
              desk={null}
              select={null}
              handleSelect={handleSelect}
            />
          </div>
        </TaskWindow>
      </ModalWindow> :
      null}
    </>
  );
}
