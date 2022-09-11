import React, { useMemo } from "react";
import { View, Pressable, Text } from "react-native";
import TodoListItem from "./TodoListItem";
import styles from "../../styles/todoList/todoListStyles";
import type { TodoItem } from "../../types/todoList";

type Props = {
	todos: TodoItem[];
	setModalVisible: (bool: boolean) => void;
};

const TodoListBody: React.FunctionComponent<Props> = ({
	todos,
	setModalVisible,
}) => {
	return (
		<View style={styles.container}>
			{todos.map(({ id, title, options, completed }, index, array) => (
				<React.Fragment key={id}>
					<TodoListItem
						id={id}
						title={title}
						completed={completed}
						options={options}
					/>
					{index < array.length - 1 ? <View style={styles.separator} /> : null}
				</React.Fragment>
			))}
			<Pressable style={styles.button} onPress={() => setModalVisible(true)}>
				<Text style={styles.buttonText}>Добавить</Text>
			</Pressable>
		</View>
	);
};

export default TodoListBody;
