import { StatusBar, StyleSheet, View } from "react-native";
import Header from "./components/header";
import TodoList from "./components/todoList";
import { Provider } from "react-redux";
import store from "./store/rootStore";

const App = () => (
	<Provider store={store}>
		<View style={styles.container}>
			<StatusBar></StatusBar>
			<Header></Header>
			<TodoList></TodoList>
		</View>
	</Provider>
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
