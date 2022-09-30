import React, { useState } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addTodo } from "../store/features/todo/todoSlice";

interface Props {
  newTask(open: boolean, id: number): void;
  todoKey: number;
  deskID: number;
}

export default function TaskForm({ newTask, todoKey, deskID }: Props) {
  const [todo, setTodo] = useState({
    title: "",
    text: "",
    key: todoKey,
    completed: false,
    desk: deskID,
    favourite: false,
  });

  const dispatch = useAppDispatch();

  function handleClickAddTask(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setTodo({ ...todo, key: todo.key + 1 });
    dispatch(addTodo(todo));
    newTask(false, 0);
  }

  return (
    <div className="mt-5 z-30">
      <form className="flex flex-col items-center justify-center text-center ">
        <label>
          Название задачи:{" "}
          <input
            type="text"
            value={todo.title}
            onChange={(event) =>
              setTodo({ ...todo, title: event.target.value })
            }
            style={{ color: "black" }}
            className="bg-neutral-300 rounded px-2 w-[85%]"
          />
        </label>
        <label className="mt-3">
          Описание задачи:{" "}
          <textarea
            cols={30}
            rows={8}
            style={{ color: "black" }}
            value={todo.text}
            onChange={(event) => setTodo({ ...todo, text: event.target.value })}
            className="rounded px-2 resize-none bg-neutral-300"
          />
        </label>
        <button
          onClick={handleClickAddTask}
          className="mt-3 border-3  rounded-sm text-white bg-transparent border-2
          border-blue-500 w-[100px] hover:border-dotted hover:border-blue-300 transition-all"
        >
          Добавить задачу
        </button>
      </form>
    </div>
  );
}
