import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	checkButton: {
		width: 30,
		height: 30,
		borderRadius: 8,
		borderWidth: 1.5,
		borderColor: "#292D32",
		alignItems: "center",
		justifyContent: "center",
	},

	checkButtonGreen: {
		backgroundColor: "#469D3E",
		borderWidth: 0,
	},

	content: {
		flexGrow: 1,
		paddingHorizontal: 20,
		justifyContent: "center",
		flex: 1,
	},

	title: {
		fontWeight: "500",
		fontSize: 17,
		lineHeight: 25.5,
		color: "#3B3B3B",
	},

	options: {
		fontWeight: "400",
		fontSize: 13,
		lineHeight: 17,
		color: "#3B3B3B",
	},

	deleteButton: {
		width: 40,
		height: 40,
		borderRadius: 8,
		backgroundColor: "#F8F8F8",
		alignItems: "center",
		justifyContent: "center",
	},

	trashIcon: {
		color: "#6F767E",
	},

	checkMarkIconGray: {
		opacity: 0.33,
		color: "#3B3B3B",
	},

	checkMarkIconWhite: {
		color: "#fff",
		opacity: 1,
	},
});

export default styles;
