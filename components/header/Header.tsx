import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../styles/header/headerStyles";
import TodoListFilterModal from "../todoList/TodoListFilterModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootStore";

const Header = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const { filterMethod } = useSelector((state: RootState) => state.todoList);
	return (
		<>
			<View style={styles.container}>
				<Pressable style={styles.button} onPress={() => setModalVisible(true)}>
					<Text style={styles.buttonText}>Показывать все задания</Text>
				</Pressable>
			</View>
			<TodoListFilterModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
};

export default Header;
