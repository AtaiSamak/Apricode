import { StatusBar, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import ToDoList from "./components/toDoList";

const App = () => (
	<View style={styles.container}>
		<StatusBar></StatusBar>
		<Header></Header>
		<ToDoList></ToDoList>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 17,
	},
});

export default App;
