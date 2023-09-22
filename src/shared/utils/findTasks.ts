import { ITask } from '../interfaces'

export const findTasks = (allTasks: ITask[], searchPhrase: string) => {
	return allTasks.filter((task) => {
		return task.title.toLowerCase().includes(searchPhrase.toLowerCase().trim())
	})
}
