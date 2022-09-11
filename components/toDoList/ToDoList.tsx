import React, { useState, useMemo } from "react";
import TodoListAddModal from "./TodoListAddModal";
import { RootState } from "../../store/rootStore";
import { useSelector } from "react-redux";
import { FilterMethods } from "../../constants/todoList";
import FilterTodos from "../../utils/filter";
import TodoListHeader from "./TodoListHeader";
import TodoListBody from "./TodoListBody";

const TodoList = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const todos = useSelector((state: RootState) => state.todoList.items);
	const filterMethod = useSelector(
		(state: RootState) => state.todoList.filterMethod
	);

	const filteredTodos = useMemo(() => {
		if (filterMethod !== FilterMethods.ALL) {
			return filterMethod === FilterMethods.COMPLETED
				? FilterTodos.byCompleted(todos)
				: FilterTodos.byUncompleted(todos);
		}
		return todos;
	}, [todos, filterMethod]);

	return (
		<>
			<TodoListHeader />
			<TodoListBody todos={filteredTodos} setModalVisible={setModalVisible} />
			<TodoListAddModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
};

export default TodoList;
