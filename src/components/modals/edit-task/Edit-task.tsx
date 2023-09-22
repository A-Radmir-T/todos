import { useForm } from 'react-hook-form'
import { Modal } from '../modal/Modal'
import { ITask } from '../../../shared/interfaces/'
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
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: task.title,
		},
		mode: 'onChange',
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
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h2>Редактировать</h2>
				{errors?.title && <p className="error">{`${errors?.title?.message}`}</p>}
				<textarea {...register('title', { required: 'Поле не должно быть пустым' })} />
				<button type="submit" className="editBtn">
					Изменить
				</button>
				<button type="button" onClick={() => onCloseModal()} className="cancelBtn">
					Отмена
				</button>
			</form>
		</Modal>
	)
}
