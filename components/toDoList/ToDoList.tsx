import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "../../styles/toDoList/toDoListStyles";
import ToDoListAddModal from "./ToDoListAddModal";
import ToDoListItem from "./ToDoListItem";

const data = [
	{
		id: 1,
		title: "Math",
		options: "Hello world",
		completed: false,
	},
	{
		id: 2,
		title: "English",
		options: "Read book",
		completed: true,
	},
	{
		id: 3,
		title: "ISO",
		options:
			"Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки",
		completed: false,
	},
];

const ToDoList = () => {
	return (
		<>
			<View style={styles.container}>
				{data.map(({ id, title, options, completed }, index, array) => (
					<React.Fragment key={id}>
						<ToDoListItem
							title={title}
							completed={completed}
							options={options}
						/>
						{index < array.length - 1 ? (
							<View style={styles.separator} />
						) : null}
					</React.Fragment>
				))}
				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Добавить</Text>
				</Pressable>
			</View>
			<ToDoListAddModal modalVisible={true} />
		</>
	);
};

export default ToDoList;
