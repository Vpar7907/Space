import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskWindow from "./TaskWindow";
import TaskDisplay from "./TaskDisplay";
import ModalWindow from "./ModalWindow";
import NewDesk from "./NewDesk";
import { IDesk } from "../models";
import { useAppDispatch } from "../hooks/reduxHooks";
import { deskWasDeleted } from "../store/features/todo/todoSlice";
import Favourites from "./Favourites";

export default function Task() {
  const [desk, setDesk] = useState([
    {
      name: "hello world",
      id: 0,
    },
  ]);
  const [selectTodo, setSelectTodo] = useState(0);
  const [openNewTask, setOpenNewTask] = useState(false);
  const [todoKey, setTodoKey] = useState(0);
  const [selectDesk, setSelectDesk] = useState(0);
  const [favourites, setFavourites] = useState(false);
  const favouritesHandler = () => {
    setFavourites(!favourites);
  };

  const dispatch = useAppDispatch();

  const handleNewDesk = () => {
    let id: number;
    if (desk.length !== 0) {
      id = desk[desk.length - 1].id + 1;
    } else {
      id = 0;
    }
    setDesk([
      ...desk,
      {
        name: "",
        id: id,
      },
    ]);
  };

  const handleClose = () => {
    setOpenNewTask(false);
    setSelectTodo(0);
  };

  const handleCloseDesk = (id: IDesk["id"]) => {
    const newDesk = desk.filter((desk) => desk.id !== id);

    setDesk(newDesk);
    dispatch(deskWasDeleted(id));
  };

  const handleOpenNewTask = (state: boolean, deskID: number) => {
    const key = Date.now();
    setSelectDesk(deskID);
    setOpenNewTask(state);
    setTodoKey(key);
  };

  const handleSetNameDesk = (name: string, id: number): void => {
    const index = desk.findIndex((item) => item.id === id);
    desk.splice(index, 1, { name: name, id: id });
    setDesk(desk);
  };

  const handleSelect = (select: number) => {
    setSelectTodo(select);
  };

  return (
    <div className="flex mt-0 ">
      <div className="flex flex-nowrap items-center mx-auto content-center overflow-y-auto ">
        <Favourites
          close={favouritesHandler}
          favourites={favourites}
          handleSelect={handleSelect}
        />
        {openNewTask ? (
          <ModalWindow close={handleClose}>
            <TaskWindow width={"300px"} height={"400px"}>
              <TaskForm
                newTask={handleOpenNewTask}
                todoKey={todoKey}
                deskID={selectDesk}
              />
            </TaskWindow>
          </ModalWindow>
        ) : null}
        {
          // Доски
          desk.map((desk) => (
            <div key={desk.id}>
              <TaskWindow width={"300px"} height={"400px"}>
                <TaskList
                  setNameDesk={handleSetNameDesk}
                  desk={desk}
                  handleSelect={handleSelect}
                  select={selectTodo}
                  newTask={handleOpenNewTask}
                  close={handleCloseDesk}
                />
              </TaskWindow>
            </div>
          ))
        }
        <NewDesk newDesk={handleNewDesk} />
        {
          // Редактор задачи
          selectTodo ? (
            <ModalWindow close={handleClose}>
              <TaskWindow width={"600px"} height={"430px"}>
                <TaskDisplay select={selectTodo} handleSelect={handleSelect} />
              </TaskWindow>
            </ModalWindow>
          ) : null
        }
      </div>
    </div>
  );
}
