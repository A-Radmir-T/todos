import axios from 'axios'
import { DATABASE_URL } from '../constants'
import { ITask } from '../interfaces'

export const todosService = {
	async getAllTasks(): Promise<ITask[]> {
		const response = await axios.get(`${DATABASE_URL}/todos`)
		return response.data
	},
	async getTaskById(id: string): Promise<ITask> {
		const response = await axios.get(`${DATABASE_URL}/todos/${id}`)
		return response.data
	},
	async createTask(data: ITask): Promise<ITask> {
		const response = await axios.post(`${DATABASE_URL}/todos`, data)
		return response.data
	},
	async editTask(data: ITask): Promise<ITask> {
		const response = await axios.put(`${DATABASE_URL}/todos/${data.id}`, data)
		return response.data
	},
	async deleteTask(id: string): Promise<void> {
		const response = await axios.delete(`${DATABASE_URL}/todos/${id}`)
		return response.data
	},
}
