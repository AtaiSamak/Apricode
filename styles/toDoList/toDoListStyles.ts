import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		width: "100%",
	},

	button: {
		marginTop: 25,
		backgroundColor: "#3785CC",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		width: "100%",
		borderRadius: 8,
	},

	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "500",
		lineHeight: 24,
	},

	separator: {
		height: 1,
		width: "100%",
		backgroundColor: "#EEF8FD",
	},
});

export default styles;
