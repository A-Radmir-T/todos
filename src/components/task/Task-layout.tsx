import styles from './Task.module.scss'
import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { EditTask } from '../modals/edit-task/Edit-task'
import { ITask } from '../../shared/interfaces'
import { Dispatch, SetStateAction } from 'react'

interface TaskLayoutProps {
	task: ITask
	isEdit: boolean
	setIsEdit: Dispatch<SetStateAction<boolean>>
	isDelete: boolean
	setIsDelete: Dispatch<SetStateAction<boolean>>
	onClickEdit: (data: ITask) => void
	onClickDelete: () => void
}

export const TaskLayout = ({
	task,
	isEdit,
	setIsEdit,
	isDelete,
	setIsDelete,
	onClickEdit,
	onClickDelete,
}: TaskLayoutProps) => {
	return (
		<>
			<div className={styles.todo}>
				<p>{task.title}</p>
				<div className={styles.buttons}>
					<button className={styles.button} type="button" onClick={() => setIsEdit(true)}>
						<FiEdit3 />
					</button>
					<button
						className={styles.button}
						type="button"
						onClick={() => setIsDelete(true)}
					>
						<RiDeleteBin6Line />
					</button>
				</div>
				{isDelete && (
					<div className={isDelete ? `${styles.edit} ${styles.show}` : `${styles.edit}`}>
						<p>Удалить задачу?</p>
						<div className={styles.buttons}>
							<button className="success" type="button" onClick={() => onClickDelete()}>
								Да
							</button>
							<button className="warn" type="button" onClick={() => setIsDelete(false)}>
								Нет
							</button>
						</div>
					</div>
				)}
			</div>
			{isEdit && (
				<EditTask
					task={task}
					handleUpdateTask={onClickEdit}
					onCloseModal={() => setIsEdit(false)}
				/>
			)}
		</>
	)
}
