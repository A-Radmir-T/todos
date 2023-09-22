import { Modal } from '../modal/Modal'
import { useForm } from 'react-hook-form'
import { ITask } from '../../../shared/interfaces/'
import { useEffect } from 'react'

interface EditTaskProps {
	handleCreateTask: (data: ITask) => void
	onCloseModal: () => void
}

export const CreateTask = ({ handleCreateTask, onCloseModal }: EditTaskProps) => {
	const {
		handleSubmit,
		register,
		setFocus,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})
	const onSubmit = ({ title }: { [key: string]: string }) => {
		const newTask: ITask = { title }
		handleCreateTask(newTask)
	}

	useEffect(() => {
		setFocus('title')
	}, [])

	return (
		<Modal>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h2>Создать задачу</h2>
				{errors?.title && <p className="error">{`${errors?.title?.message}`}</p>}
				<textarea {...register('title', { required: 'Поле не должно быть пустым' })} />
				<button type="submit" className="editBtn">
					Создать
				</button>
				<button type="button" onClick={() => onCloseModal()} className="cancelBtn">
					Отмена
				</button>
			</form>
		</Modal>
	)
}
