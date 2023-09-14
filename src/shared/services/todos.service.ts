import axios from 'axios'
import { DbUrl } from '../constants'
import { ITask } from '../interfaces'

export const todosService = {
	async getAllTasks(): Promise<ITask[]> {
		const response = await axios.get(`${DbUrl}/todos`)
		return response.data
	},
	async createTask(data: ITask): Promise<ITask> {
		const response = await axios.post(`${DbUrl}/todos`, data)
		return response.data
	},
	async editTask(data: ITask): Promise<ITask> {
		const response = await axios.put(`${DbUrl}/todos/${data.id}`, data)
		return response.data
	},
	async deleteTask(id: string): Promise<void> {
		const response = await axios.delete(`${DbUrl}/todos/${id}`)
		return response.data
	},
}
