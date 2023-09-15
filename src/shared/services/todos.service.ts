import axios from 'axios'
import { DbUrl } from '../constants'
import { IFbCreateResponse, ITask } from '../interfaces'

export const todosService = {
	async getAllTasks(): Promise<ITask[]> {
		const response = await axios.get(`${DbUrl}/todos.json`)
		if (!response.data) return []
		return Object.keys(response.data).map((key) => {
			return {
				id: key,
				...response.data[key],
			}
		})
	},
	async createTask(data: ITask): Promise<ITask> {
		const response = await axios.post<IFbCreateResponse>(`${DbUrl}/todos.json`, data)
		return {
			id: response.data.name,
			...data,
		}
	},
	async editTask(data: ITask): Promise<ITask> {
		const response = await axios.put<ITask>(`${DbUrl}/todos/${data.id}.json`, data)
		return response.data
	},
	async deleteTask(id: string): Promise<void> {
		const response = await axios.delete(`${DbUrl}/todos/${id}.json`)
		return response.data
	},
}
