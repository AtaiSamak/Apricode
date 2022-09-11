import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
	},

	content: {
		backgroundColor: "rgba(249, 249, 249, 0.94)",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 14,
		width: "100%",
	},

	button: {
		paddingVertical: 20,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},

	buttonBorders: {
		borderTopWidth: 0.33,
		borderColor: "#fff",
		borderBottomWidth: 0.33,
	},

	buttonText: {
		color: "#737A82",
		fontWeight: "500",
		fontSize: 16,
		lineHeight: 18,
	},

	buttonTextActive: {
		color: "#3785CC",
	},
});

export default styles;
