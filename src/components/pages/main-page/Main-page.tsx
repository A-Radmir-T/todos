import { ChangeEvent, useEffect, useState } from 'react'
import { ITask } from '../../../shared/interfaces'
import { todosService } from '../../../shared/services/todos.service'
import { findTasks, sortTasks } from '../../../shared/utils'
import { MainPageLayout } from './Main-page-layout'
import { useDebounce } from '../../../hooks'

export const MainPage = () => {
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

	useEffect(() => {
		if (searchValue) {
			const found = findTasks(todosData, debouncedValue)
			setFoundTodos(found)
			return
		}
		setFoundTodos(null)
	}, [debouncedValue])

	const clearSearch = (): void => {
		setSearchValue('')
		setFoundTodos(null)
	}

	const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value } = event.target
		setSearchValue(value)
	}

	const handleCreateTask = (newTask: ITask): void => {
		setIsLoading(true)
		setFoundTodos(null)
		clearSearch()
		todosService
			.createTask(newTask)
			.then((newTask) => {
				setTodosData([...todosData, newTask])
			})
			.finally(() => setIsLoading(false))
		setIsCreateTask(false)
	}

	return (
		<MainPageLayout
			preparedTodos={prepareTodos}
			searchValue={searchValue}
			onChangeSearch={handleChangeSearch}
			isSorted={isSorted}
			setIsSorted={setIsSorted}
			isCreateTask={isCreateTask}
			setIsCreateTask={setIsCreateTask}
			handleCreateTask={handleCreateTask}
			isLoading={isLoading}
		/>
	)
}
