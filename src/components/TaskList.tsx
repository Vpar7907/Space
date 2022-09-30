import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IDesk, ITodo } from "../models";
import CloseButton from "./UI/CloseButton";
import TaskItem from "./TaskItem";

interface Props {
  desk: IDesk;
  handleSelect(a: number): void;
  select: number;
  newTask(state: boolean, deskID: IDesk["id"]): void;
  close: any;
  setNameDesk(name: string, id: number): void;
}

export default function TaskList(props: Props) {
  const [valueDesk, setValueDesk] = useState(props.desk.name);

  const todoData = useAppSelector((state): ITodo[] => state.todo);
  const dispatch = useAppDispatch();

  const handleNewTask = (event: React.MouseEvent<HTMLDivElement>) => {
    props.newTask(true, props.desk.id);
  };

  const handleClose = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    props.close(props.desk.id);
  };

  return (
    <div className="overflow-hidden">
      <div className="min-h-full  min-w-full flex flex-col justify-between ">
        <div>
          <div className="flex justify-between p-3 pb-0  ">
            <input
              className="bg-transparent text-center w-[80%] mt-0 outline-none hover:outline-sky-700 hover:rounded focus:outline-3 focus:outline-blue-500 focus:outline-3 focus:rounded"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValueDesk(event.target.value);
              }}
              onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                props.setNameDesk(valueDesk, props.desk.id);
              }}
              value={valueDesk}
            />
            <div className="text-right">
              <CloseButton handleClose={handleClose} />
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="max-h-[324px] min-h-[324px] overflow-y-auto">
              <TaskItem
                type="_list"
                desk={props.desk}
                select={props.select}
                handleSelect={props.handleSelect}
              />
            </div>
          </div>
        </div>
        <div
          className="bg-amber-400 m-0 text-gray-800 text-center h-10 text-2xl font-thin hover:cursor-pointer hover:bg-amber-300 overflow-hidden"
          onClick={handleNewTask}
        >
          <p className="text-3xl">+</p>
        </div>
      </div>
    </div>
  );
}
