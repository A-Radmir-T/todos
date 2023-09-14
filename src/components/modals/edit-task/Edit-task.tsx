import { useForm } from 'react-hook-form'
import styles from './Edit-task.module.scss'
import { Modal } from '../modal/Modal'
import { ITask } from '../../../shared/interfaces/todo.interface'
import { useEffect } from 'react'

interface EditTaskProps {
	task: ITask
	handleUpdateTask: (data: ITask) => void
	onCloseModal: () => void
}

export const EditTask = ({ task, handleUpdateTask, onCloseModal }: EditTaskProps) => {
	const {
		handleSubmit,
		register,
		setFocus,
		formState: { isValid },
	} = useForm({
		defaultValues: {
			title: task.title,
		},
	})
	const onSubmit = (data: ITask) => {
		const editedTask: ITask = { ...task, ...data }
		handleUpdateTask(editedTask)
	}

	useEffect(() => {
		setFocus('title')
	}, [])
	return (
		<Modal>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2>Редактировать</h2>
				<input
					type="text"
					{...register('title', { required: 'Поле не должно быть пустым' })}
				/>
				<button type="submit" disabled={!isValid} className={styles.editBtn}>
					Изменить
				</button>
				<button type="button" onClick={() => onCloseModal()} className={styles.CancelBtn}>
					Отмена
				</button>
			</form>
		</Modal>
	)
}
