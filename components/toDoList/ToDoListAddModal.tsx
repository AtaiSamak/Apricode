import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Modal,
	TextInput,
	Pressable,
} from "react-native";
import styles from "../../styles/toDoList/toDoListAddModal";

type Props = {
	modalVisible: boolean;
};

const ToDoListAddModal: React.FunctionComponent<Props> = ({ modalVisible }) => {
	return (
		<Modal visible={modalVisible} animationType="fade" transparent={true}>
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.horizontalPadding}>
						<Text style={styles.title}>Добавить предмет</Text>
						<Text style={styles.subtitle}>Укажите заголовок и задание</Text>
						<TextInput style={styles.input} placeholder="Загаловок" />
						<TextInput style={styles.input} placeholder="Задание" />
					</View>
					<View style={[styles.buttons, styles.horizontalPadding]}>
						<Pressable style={styles.button}>
							<Text style={styles.buttonCancel}>Отмена</Text>
						</Pressable>
						<View style={styles.buttonSeparator}></View>
						<Pressable style={styles.button}>
							<Text style={styles.buttonSave}>Сохранить</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default ToDoListAddModal;
