import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IDesk, ITodo } from "../models";
import {
  deleteTodo,
  addFavourite,
  deleteFavourite,
} from "../store/features/todo/todoSlice";
import jpg from "../icons/deleteLogo.jpg";
import star from "../icons/star.png";
import starActive from "../icons/starActive.png";

interface Props {
  desk: IDesk | null;
  handleSelect(a: number): void;
  select: number | null;
  type: string;
}

function TaskItem({ desk, handleSelect, select, type }: Props) {
  const todoData = useAppSelector((state): ITodo[] => state.todo);
  const dispatch = useAppDispatch();

  return (
    <>
      {todoData
        .filter((todo) => {
          if (type === "_list" && desk !== null) {
            return todo.desk === desk.id;
          } else if (type === "_favourite") {
            return todo.favourite;
          }
        })
        .map((data: ITodo) => (
          <div key={data.key} className="flex justify-between m-3 mt-5 bold  ">
            <span
              onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
                handleSelect(data.key);
              }}
              className="min-w-[150px] px-2 hover:border-l-2 hover:cursor-pointer"
            >
              {data.title}
            </span>
            <div className="flex justify-around">
              <img
                src={!data.favourite ? star : starActive}
                alt="star"
                style={{ filter: "invert(0.75)" }}
                className="h-[16px] w-[16px] mx-2 mt-[4px] hover:scale-150 hover:cursor-pointer transition-all z-10"
                onClick={() => {
                  if (!data.favourite) {
                    dispatch(addFavourite(data.key));
                  } else {
                    dispatch(deleteFavourite(data.key));
                  }
                }}
              />
              {type === "_list" ? (
                <img
                  className="w-[23px] h-[23px] border-black p-1 hover:border-b-1 hover:scale-150 hover:cursor-pointer transition-all z-10"
                  onClick={() => {
                    if (select !== data.key) {
                      dispatch(deleteTodo(data.key));
                    } else {
                      handleSelect(0);
                      dispatch(deleteTodo(data.key));
                    }
                  }}
                  style={{ filter: "invert(1)" }}
                  src={jpg}
                  alt={"Delete"}
                />
              ) : null}
            </div>
          </div>
        ))}
    </>
  );
}

export default TaskItem;
