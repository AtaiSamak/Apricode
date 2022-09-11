import type TodoItem from "../types/todoList";

class FilterTodos {
	static byCompleted(todos: TodoItem[]) {
		return todos.filter((todo) => todo.completed === true);
	}

	static byUncompleted(todos: TodoItem[]) {
		return todos.filter((todo) => todo.completed === false);
	}
}

export default FilterTodos;
