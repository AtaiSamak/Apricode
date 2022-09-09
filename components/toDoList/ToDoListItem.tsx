import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../../styles/toDoList/toDoListItemStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

type Props = {
	title: string;
	options: string;
	completed: boolean;
};

const ToDoListItem: React.FunctionComponent<Props> = ({
	title,
	options,
	completed,
}) => {
	const checkContainerStyles = [
		styles.checkButton,
		completed ? styles.checkButtonGreen : null,
	];

	return (
		<View style={styles.container}>
			<Pressable style={checkContainerStyles}>
				<FontAwesome
					name="check"
					solid
					style={[
						completed ? styles.checkMarkIconWhite : styles.checkMarkIconGray,
					]}
				/>
			</Pressable>
			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.options} numberOfLines={3}>
					{options}
				</Text>
			</View>
			<Pressable style={styles.deleteButton}>
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

export default ToDoListItem;
