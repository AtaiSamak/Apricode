import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterMethods } from "../../constants/todoList";
import type TodoItem from "../../types/todoList";
import FilterTodos from "../../utils/filter";

const initialState = {
	filterMethod: FilterMethods.ALL as FilterMethods,
	items: [
		{
			id: "1",
			title: "Math",
			options: "Hello world",
			completed: false,
		},
		{
			id: "2",
			title: "English",
			options: "Read book",
			completed: true,
		},
		{
			id: "3",
			title: "ISO",
			options:
				"Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки",
			completed: false,
		},
	] as TodoItem[],
};

const todoListSlice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action: PayloadAction<TodoItem>) => {
				state.items.push(action.payload);
			},
			prepare: (title: string, options: string) => ({
				payload: { id: nanoid(), title, options, completed: false },
			}),
		},
		delete: (state, action) => {
			const { id } = action.payload;
			state.items = state.items.filter((todo) => todo.id !== id);
		},
		toggleCompleted: (state, action) => {
			const { id } = action.payload;
			const index = state.items.findIndex((todo) => todo.id === id);
			state.items[index].completed = !state.items[index].completed;
		},
		changeFilterMethod: (state, action) => {
			state.filterMethod = action.payload.filterMethod;
		},
	},
});

export const todoListActions = todoListSlice.actions;
export default todoListSlice.reducer;
