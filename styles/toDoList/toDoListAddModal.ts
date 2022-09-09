import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		alignItems: "center",
		justifyContent: "center",
	},

	content: {
		backgroundColor: "rgba(249, 249, 249, 0.94)",
		paddingTop: 18,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 14,
		maxWidth: 270,
	},

	horizontalPadding: {
		paddingHorizontal: 16,
		alignItems: "center",
		justifyContent: "center",
	},

	title: {
		fontStyle: "normal",
		fontSize: 17,
		lineHeight: 22,
		fontWeight: "500",
		color: "#3B3B3B",
	},

	subtitle: {
		color: "#737A82",
		fontSize: 13,
		lineHeight: 18,
		fontWeight: "400",
		marginTop: 4,
	},

	input: {
		borderWidth: 0.5,
		width: 238,
		borderRadius: 7,
		borderColor: "rgba(60, 60, 67, 0.3)",
		paddingHorizontal: 6,
		fontWeight: "400",
		fontSize: 13,
		lineHeight: 18,
		marginTop: 16,
	},

	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderTopWidth: 0.5,
		borderTopColor: "#fff",
		marginTop: 17,
	},

	buttonSeparator: {
		height: "100%",
		width: 0.5,
		backgroundColor: "#fff",
	},

	button: {
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 10,
		paddingBottom: 12,
	},

	buttonSave: {
		color: "#3784CC",
		fontSize: 17,
		fontWeight: "500",
		lineHeight: 22,
		borderStartColor: "#fff",
	},

	buttonCancel: {
		color: "#C3C3C5",
		fontSize: 17,
		fontWeight: "500",
		lineHeight: 22,
		borderEndWidth: 0.16,
		borderEndColor: "#fff",
	},
});

export default styles;
