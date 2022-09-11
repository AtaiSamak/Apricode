import React, { useState } from "react";
import {
	View,
	Text,
	Modal,
	TextInput,
	Pressable,
	TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { todoListActions } from "../../store/todoList/todoListSlice";
import styles from "../../styles/todoList/todoListAddModal";

type Props = {
	modalVisible: boolean;
	setModalVisible: (bool: boolean) => void;
};

const TodoListAddModal: React.FunctionComponent<Props> = ({
	modalVisible,
	setModalVisible,
}) => {
	const [title, setTitle] = useState("");
	const [options, setOptions] = useState("");
	const dispatch = useDispatch();

	const closeModal = () => {
		setModalVisible(false);
	};

	const addTodo = () => {
		if (title && options) {
			dispatch(todoListActions.addTodo(title, options));
			setOptions("");
			setTitle("");
			closeModal();
		}
	};

	return (
		<Modal
			visible={modalVisible}
			animationType="none"
			transparent={true}
			onRequestClose={closeModal}
		>
			<TouchableOpacity onPress={closeModal} style={styles.container}>
				<TouchableOpacity activeOpacity={1} style={styles.content}>
					<View style={styles.horizontalPadding}>
						<Text style={styles.title}>Добавить предмет</Text>
						<Text style={styles.subtitle}>Укажите заголовок и задание</Text>
						<TextInput
							style={styles.input}
							placeholder="Загаловок"
							onChangeText={(text) => setTitle(text)}
						/>
						<TextInput
							style={styles.input}
							placeholder="Задание"
							onChangeText={(text) => setOptions(text)}
						/>
					</View>
					<View style={[styles.buttons, styles.horizontalPadding]}>
						<Pressable style={styles.button} onPress={closeModal}>
							<Text style={styles.buttonCancel}>Отмена</Text>
						</Pressable>
						<View style={styles.buttonSeparator}></View>
						<Pressable style={styles.button} onPress={addTodo}>
							<Text style={styles.buttonSave}>Сохранить</Text>
						</Pressable>
					</View>
				</TouchableOpacity>
			</TouchableOpacity>
		</Modal>
	);
};

export default TodoListAddModal;
