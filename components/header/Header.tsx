import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../styles/header/headerStyles";

const Header = () => {
	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={() => console.log("hello")}>
				<Text style={styles.buttonText}>Показывать все задания</Text>
			</Pressable>
		</View>
	);
};

export default Header;
