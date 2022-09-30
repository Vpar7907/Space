import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { editTodo } from "../store/features/todo/todoSlice";
import CloseButton from "./UI/CloseButton";
import TaskDisplayMenu from "./TaskDisplayMenu";
import TaskDisplayMain from "./TaskDisplayMain";
import { Routes, Route } from "react-router-dom";
import TaskDisplayComments from "./TaskDisplayComments";
import TaskDisplayTimer from "./TaskDisplayTimer";
import ErrorPage from "./ErorrPage";

export default function TaskDisplay(props: any) {
  const dispatch = useAppDispatch();
  const todoData = useAppSelector((state) => state.todo);

  const [dataTask, setDataTask] = useState(
    todoData.filter((item) => item.key === props.select)[0]
  );

  const handleClose = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(editTodo(dataTask));
    props.handleSelect(0);
  };

  return (
    <div className="z-30 p-3">
      <div className="flex justify-end">
        <CloseButton handleClose={handleClose} />
      </div>
      <div className="flex">
        <TaskDisplayMenu />
      </div>
    </div>
  );
}
