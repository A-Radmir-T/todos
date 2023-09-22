import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { todosService } from '../../../shared/services/todos.service'
import { ITask } from '../../../shared/interfaces'
import { TaskPageLayout } from './Task-page-layout'

export const TaskPage = () => {
	const [task, setTask] = useState<ITask | null>(null)
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [isDelete, setIsDelete] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		todosService.getTaskById(String(id)).then((taskData) => {
			setTask(taskData)
		})
	}, [])

	const handleUpdateTask = (editedTask: ITask): void => {
		if (editedTask.title !== task?.title) {
			setIsLoading(true)
			todosService
				.editTask(editedTask)
				.then((task) => {
					setTask(task)
				})
				.finally(() => setIsLoading(false))
		}

		setIsEdit(false)
	}

	const handleDeleteTask = (id: string): void => {
		todosService.deleteTask(id).then(() => {
			navigate(-1)
		})
	}

	return (
		<TaskPageLayout
			task={task}
			isEdit={isEdit}
			setIsEdit={setIsEdit}
			isDelete={isDelete}
			setIsDelete={setIsDelete}
			handleDeleteTask={handleDeleteTask}
			handleUpdateTask={handleUpdateTask}
			isLoading={isLoading}
		></TaskPageLayout>
	)
}
