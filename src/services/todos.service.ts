import axios from 'axios'
import { DbUrl } from '../constants'
import { ITodo } from '../models/todo.interface'

export const todosService = {
	async getAllTodos(): Promise<ITodo[]> {
		const response = await axios.get(`${DbUrl}/todos`)
		return response.data
	},
}
