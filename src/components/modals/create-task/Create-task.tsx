import styles from './Create-task.module.scss'
import { Modal } from '../modal/Modal'
import { FieldValue, useForm } from 'react-hook-form'
import { ITask } from '../../../shared/interfaces/todo.interface'
import { useEffect, useRef } from 'react'

interface EditTaskProps {
	handleCreateTask: (data: ITask) => void
	onCloseModal: () => void
}

export const CreateTask = ({ handleCreateTask, onCloseModal }: EditTaskProps) => {
	const {
		handleSubmit,
		register,
		setFocus,
		formState: { isValid },
	} = useForm()
	const onSubmit = ({ title }: { [key: string]: string }) => {
		const newTask: ITask = { title }
		handleCreateTask(newTask)
	}

	useEffect(() => {
		setFocus('title')
	}, [])

	return (
		<Modal>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2>Создать задачу</h2>
				<input
					type="text"
					{...register('title', { required: 'Поле не должно быть пустым' })}
				/>
				<button type="submit" disabled={!isValid} className={styles.editBtn}>
					Создать
				</button>
				<button type="button" onClick={() => onCloseModal()} className={styles.CancelBtn}>
					Отмена
				</button>
			</form>
		</Modal>
	)
}
