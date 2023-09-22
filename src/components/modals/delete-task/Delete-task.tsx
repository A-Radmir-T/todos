import { Modal } from '../modal/Modal'

interface DeleteTaskProps {
	id: string
	handleDeleteTask: (id: string) => void
	onCloseModal: () => void
}
export const DeleteTask = ({ id, handleDeleteTask, onCloseModal }: DeleteTaskProps) => {
	const onSubmit = (event: any) => {
		event.preventDefault()
		handleDeleteTask(id)
	}

	return (
		<Modal>
			<form className="form" style={{ textAlign: 'center' }} onSubmit={onSubmit}>
				<h2>Удалить задачу ?</h2>
				<button type="submit" className="editBtn">
					Удалить
				</button>
				<button type="button" onClick={() => onCloseModal()} className="cancelBtn">
					Отмена
				</button>
			</form>
		</Modal>
	)
}
