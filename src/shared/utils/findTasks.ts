import { ITask } from '../interfaces'

export const findTasks = (data: ITask[], value: string) => {
	return data.filter((task) => {
		return task.title.toLowerCase().includes(value.toLowerCase().trim())
	})
}
