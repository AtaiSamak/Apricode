import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../../styles/todoList/todoListItemStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { todoListActions } from "../../store/todoList/todoListSlice";

type Props = {
	id: string;
	title: string;
	options: string;
	completed: boolean;
};

const TodoListItem: React.FunctionComponent<Props> = ({
	id,
	title,
	options,
	completed,
}) => {
	const dispatch = useDispatch();

	const checkContainerStyles = [
		styles.checkButton,
		completed ? styles.checkButtonGreen : null,
	];

	const deleteTodo = () => {
		dispatch(todoListActions.delete({ id }));
	};

	const toggleCompleted = () => {
		dispatch(todoListActions.toggleCompleted({ id }));
	};

	return (
		<View style={styles.container}>
			<Pressable style={checkContainerStyles} onPress={toggleCompleted}>
				<FontAwesome
					name="check"
					solid
					style={[
						completed ? styles.checkMarkIconWhite : styles.checkMarkIconGray,
					]}
				/>
			</Pressable>
			<View style={styles.content}>
				<Text style={styles.title} numberOfLines={1}>
					{title}
				</Text>
				<Text style={styles.options} numberOfLines={3}>
					{options}
				</Text>
			</View>
			<Pressable style={styles.deleteButton} onPress={deleteTodo}>
				<FontAwesome
					name="trash"
					solid
					style={styles.trashIcon}
					iconSize={12}
					size={20}
				/>
			</Pressable>
		</View>
	);
};

export default TodoListItem;
