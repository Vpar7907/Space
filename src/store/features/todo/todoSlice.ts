import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface todoState {
  key: number;
  title: string;
  text: string;
  desk: number;
  favourite: boolean;
}

const initialState: todoState[] = [
  { title: "May good", text: "world", key: 1, desk: 0, favourite: false },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoState>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.key !== action.payload);
    },
    getTodo: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.key === action.payload);
    },
    editTodo: (state, action: PayloadAction<todoState>) => {
      const start = state.findIndex((item) => item.key === action.payload.key);
      state.splice(start, 1, action.payload);
      return state;
    },
    deskWasDeleted: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.desk !== action.payload);
    },
    addFavourite: (state, action: PayloadAction<number>) => {
      const start = state.findIndex((item) => item.key === action.payload);
      state[start].favourite = true;
      return state;
    },
    deleteFavourite: (state, action: PayloadAction<number>) => {
      const start = state.findIndex((item) => item.key === action.payload);
      state[start].favourite = false;
      return state;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  deskWasDeleted,
  addFavourite,
  deleteFavourite,
} = todoSlice.actions;

export default todoSlice.reducer;
