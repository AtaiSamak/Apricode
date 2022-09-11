import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../styles/todoList/todoListHeaderStyles";
import TodoListFilterModal from "./TodoListFilterModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";
import { FilterMethods } from "../../constants/todoList";
import { FILTER_METHOD_LABELS } from "../../constants/todoList";

const TodoListHeader = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const { filterMethod } = useSelector((state: RootState) => state.todoList);
	const activeFilterLabel = FILTER_METHOD_LABELS.find(
		(label) => label.filterMethod === filterMethod
	);

	return (
		<>
			<View style={styles.container}>
				<Pressable style={styles.button} onPress={() => setModalVisible(true)}>
					<Text style={styles.buttonText}>{activeFilterLabel?.label}</Text>
				</Pressable>
			</View>
			<TodoListFilterModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
};

export default TodoListHeader;
