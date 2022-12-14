import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./todoList/todoListSlice";

const store = configureStore({
	reducer: {
		todoList: todoListReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
