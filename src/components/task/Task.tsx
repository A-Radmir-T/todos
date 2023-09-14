import styles from './Task.module.scss'
import { ITask } from '../../shared/interfaces/todo.interface'
import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react'
import { EditTask } from '../modals/edit-task/Edit-task'
import { TaskLayout } from './Task-layout'

interface TodoProps {
	task: ITask
	handleUpdateTask: (editedTask: ITask) => void
	handleDeleteTask: (id: string) => void
}
export const Task = ({ task, handleUpdateTask, handleDeleteTask }: TodoProps) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [isDelete, setIsDelete] = useState<boolean>(false)
	const onClickEdit = (data: ITask): void => {
		if (data.title !== task.title) {
			handleUpdateTask(data)
		}
		setIsEdit(false)
	}

	const onClickDelete = (): void => {
		if (task.id) handleDeleteTask(task.id)
		setIsDelete(false)
	}

	return (
		<TaskLayout
			task={task}
			isEdit={isEdit}
			setIsEdit={setIsEdit}
			isDelete={isDelete}
			setIsDelete={setIsDelete}
			onClickEdit={onClickEdit}
			onClickDelete={onClickDelete}
		/>
	)
}
