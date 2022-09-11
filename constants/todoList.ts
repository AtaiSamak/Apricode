export enum FilterMethods {
	ALL = "all",
	COMPLETED = "completed",
	UNCOMPLETED = "uncompleted",
}

export const FILTER_METHOD_LABELS = [
	{ label: "Показывать все задания", filterMethod: FilterMethods.ALL },
	{ label: "Выполненные", filterMethod: FilterMethods.COMPLETED },
	{ label: "Не выполненные", FilterMethods: FilterMethods.UNCOMPLETED },
];
