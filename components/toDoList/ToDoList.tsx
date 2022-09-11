import React, { useState, useMemo } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "../../styles/todoList/todoListStyles";
import TodoListAddModal from "./TodoListAddModal";
import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";
import { FilterMethods } from "../../constants/todoList";
import FilterTodos from "../../utils/filter";

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
			<View style={styles.container}>
				{filteredTodos.map(
					({ id, title, options, completed }, index, array) => (
						<React.Fragment key={id}>
							<TodoListItem
								id={id}
								title={title}
								completed={completed}
								options={options}
							/>
							{index < array.length - 1 ? (
								<View style={styles.separator} />
							) : null}
						</React.Fragment>
					)
				)}
				<Pressable style={styles.button} onPress={() => setModalVisible(true)}>
					<Text style={styles.buttonText}>Добавить</Text>
				</Pressable>
			</View>
			<TodoListAddModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
};

export default TodoList;
