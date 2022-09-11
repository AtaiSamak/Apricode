import React from "react";
import { View, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import { FilterMethods } from "../../constants/todoList";
import styles from "../../styles/todoList/todoListFilterModal";
import { useDispatch, useSelector } from "react-redux";
import { todoListActions } from "../../store/todoList/todoListSlice";
import { RootState } from "../../store/rootStore";

const BUTTONS = [
	{ name: "Показывать все задания", filterMethod: FilterMethods.ALL },
	{ name: "Выполненные", filterMethod: FilterMethods.COMPLETED },
	{ name: "Не выполненные", FilterMethods: FilterMethods.UNCOMPLETED },
];

type Props = {
	modalVisible: boolean;
	setModalVisible: (bool: boolean) => void;
};

const TodoListFilterModal: React.FunctionComponent<Props> = ({
	modalVisible,
	setModalVisible,
}) => {
	const dispatch = useDispatch();
	const activeFilterMethod = useSelector(
		(state: RootState) => state.todoList.filterMethod
	);

	const buttonsComponents = BUTTONS.map(
		({ name, filterMethod }, index, array) => {
			const borderStyles =
				index === 0 || index === array.length - 1 ? null : styles.buttonBorders;

			return (
				<Pressable
					key={index}
					style={[styles.button, borderStyles]}
					onPress={() => {
						dispatch(todoListActions.changeFilterMethod({ filterMethod }));
						setModalVisible(false);
					}}
				>
					<Text
						style={[
							styles.buttonText,
							activeFilterMethod === filterMethod
								? styles.buttonTextActive
								: null,
						]}
					>
						{name}
					</Text>
				</Pressable>
			);
		}
	);

	return (
		<Modal visible={modalVisible} animationType="fade" transparent={true}>
			<TouchableOpacity
				onPress={() => setModalVisible(false)}
				style={styles.container}
			>
				<TouchableOpacity style={styles.content}>
					{buttonsComponents}
				</TouchableOpacity>
			</TouchableOpacity>
		</Modal>
	);
};

export default TodoListFilterModal;
