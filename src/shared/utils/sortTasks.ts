import { ITask } from '../interfaces/todo.interface'

export const sortTasks = (tasks: ITask[]): ITask[] => {
	// @ts-ignore
	return tasks.toSorted((a, b) => {
		if (a.title[0] > b.title[0]) {
			return 1
		}
		if (a.title[0] < b.title[0]) {
			return -1
		}
		return 0
	})
}
