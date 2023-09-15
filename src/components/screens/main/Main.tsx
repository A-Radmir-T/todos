import { todosService } from '../../../shared/services/todos.service'
import { useEffect, useState } from 'react'
import { ITask } from '../../../shared/interfaces'
import { useDebounce } from '../../../hooks'
import { findTasks, sortTasks } from '../../../shared/utils'
import { MainLayout } from './Main-layout'
import { handleChangeSearch } from '../../../handlers'

export const Main = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isCreateTask, setIsCreateTask] = useState(false)
	const [foundTodos, setFoundTodos] = useState<ITask[] | null>(null)
	const [searchValue, setSearchValue] = useState<string>('')
	const [todosData, setTodosData] = useState<ITask[]>([])
	const [isSorted, setIsSorted] = useState<boolean>(false)
	const debouncedValue = useDebounce(searchValue)

	let prepareTodos: ITask[] = todosData
	if (isSorted) prepareTodos = sortTasks(todosData)
	if (foundTodos) prepareTodos = foundTodos

	useEffect(() => {
		setIsLoading(true)
		todosService
			.getAllTasks()
			.then((data) => {
				setTodosData(data)
			})
			.finally(() => setIsLoading(false))
	}, [])

	const clearSearch = (): void => {
		setSearchValue('')
		setFoundTodos(null)
	}

	useEffect(() => {
		if (searchValue) {
			const found = findTasks(todosData, debouncedValue)
			setFoundTodos(found)
			return
		}
		setFoundTodos(null)
	}, [debouncedValue])

	const handleDeleteTask = (id: string): void => {
		setIsLoading(true)
		clearSearch()
		todosService
			.deleteTask(id)
			.then(() => {
				const updatedTasks = todosData.filter((task) => task.id !== id)
				setTodosData(updatedTasks)
			})
			.finally(() => setIsLoading(false))
	}

	const handleUpdateTask = (editedTask: ITask): void => {
		setIsLoading(true)
		clearSearch()
		todosService
			.editTask(editedTask)
			.then((task) => {
				const updatedTasks = todosData.map((task) => {
					if (task.id === editedTask.id) {
						task = { ...editedTask }
					}
					return task
				})
				setTodosData(updatedTasks)
			})
			.finally(() => setIsLoading(false))
	}

	const handleCreateTask = (newTask: ITask): void => {
		setIsLoading(true)
		setFoundTodos(null)
		todosService
			.createTask(newTask)
			.then((newTask) => {
				setTodosData([...todosData, newTask])
			})
			.finally(() => setIsLoading(false))
		setIsCreateTask(false)
	}

	return (
		<MainLayout
			preparedTodos={prepareTodos}
			foundTodos={foundTodos}
			searchValue={searchValue}
			onChangeSearch={(event) => handleChangeSearch(event, setSearchValue)}
			isSorted={isSorted}
			setIsSorted={setIsSorted}
			isCreateTask={isCreateTask}
			setIsCreateTask={setIsCreateTask}
			handleCreateTask={handleCreateTask}
			handleUpdateTask={handleUpdateTask}
			handleDeleteTask={handleDeleteTask}
			isLoading={isLoading}
		/>
	)
}
