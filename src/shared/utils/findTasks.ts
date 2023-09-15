import { ITask } from '../interfaces'

export const findTasks = (allTasks: ITask[], value: string) => {
	return allTasks.filter((task) => {
		return task.title.toLowerCase().includes(value.toLowerCase().trim())
	})
}
