import { Dispatch, ReactNode, SetStateAction } from 'react'
import styles from './Task-page.module.scss'
import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { EditTask } from '../../modals/edit-task/Edit-task'
import { ITask } from '../../../shared/interfaces'
import { Task } from '../../task/Task'
import { DeleteTask } from '../../modals/delete-task/Delete-task'
import { Loading } from '../../loading/Loading'

interface TaskPageLayoutProps {
	task: ITask | null
	isEdit: boolean
	setIsEdit: Dispatch<SetStateAction<boolean>>
	isDelete: boolean
	setIsDelete: Dispatch<SetStateAction<boolean>>
	handleDeleteTask: (id: string) => void
	handleUpdateTask: (data: ITask) => void
	isLoading: boolean
}

export const TaskPageLayout = ({
	task,
	isEdit,
	setIsEdit,
	isDelete,
	setIsDelete,
	handleDeleteTask,
	handleUpdateTask,
	isLoading,
}: TaskPageLayoutProps) => {
	return (
		<div className="container">
			{isLoading && <Loading />}
			<div className={styles.actions}>
				<button>
					<NavLink className={styles.button} to="/">
						<IoArrowBackOutline />
					</NavLink>
				</button>

				<div className={styles.buttons}>
					<button className={styles.edit} type="button" onClick={() => setIsEdit(true)}>
						<FiEdit3 />
					</button>
					<button
						className={styles.delete}
						type="button"
						onClick={() => setIsDelete(true)}
					>
						<RiDeleteBin6Line />
					</button>
				</div>
			</div>
			{task && <Task task={task} />}
			{isDelete && task && (
				<DeleteTask
					id={task.id || ''}
					handleDeleteTask={handleDeleteTask}
					onCloseModal={() => setIsDelete(false)}
				/>
			)}
			{isEdit && task && (
				<EditTask
					task={task}
					handleUpdateTask={handleUpdateTask}
					onCloseModal={() => setIsEdit(false)}
				/>
			)}
		</div>
	)
}
