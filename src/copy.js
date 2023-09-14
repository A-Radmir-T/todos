// import styles from './Modal.module.scss'
// import { useForm } from 'react-hook-form'
// import { ITask } from '../../shared/interfaces/todo.interface'
// import { todosService } from '../../shared/services/todos.service'
// import { useEffect } from 'react'
//
// interface ModalProps {
// 	type: 'edit' | 'create'
// 	task: ITask | null
// 	handleSubmitForm: (data: ITask) => void
// 	onCloseModal: () => void
// }
//
// export const Modal = ({
// 	type,
// 	task = null,
// 	handleSubmitForm,
// 	onCloseModal,
// }: ModalProps) => {
// 	const defaultValue = task ? task.title : ''
// 	const {
// 		handleSubmit,
// 		register,
// 		formState: { isValid },
// 	} = useForm({
// 		defaultValues: {
// 			title: defaultValue,
// 		},
// 	})
//
// 	const onSubmit = (data: ITask) => {
// 		if (type === 'edit') {
// 			const editedTask: ITask = { ...task, ...data }
// 			handleSubmitForm(editedTask)
// 			return
// 		}
// 		handleSubmitForm(data)
// 	}
//
// 	return (
// 		<div className={styles.modal}>
// 			<div className={styles.wrap}>
// 					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
// 						{/*<h2>Редактировать</h2>*/}
// 						{/*<input*/}
// 						{/*	type="text"*/}
// 						{/*	{...register('title', { required: 'Поле не должно быть пустым' })}*/}
// 						{/*/>*/}
// 						{/*<button type="submit" disabled={!isValid} className={styles.editBtn}>*/}
// 						{/*	Изменить*/}
// 						{/*</button>*/}
// 						{/*<button type="button" onClick={() => {}} className={styles.CancelBtn}>*/}
// 						{/*	Отмена*/}
// 						{/*</button>*/}
// 						{children}
// 					</form>
// 			</div>
// 		</div>
// 	)
// }

//
// console.log(
// 	todosData.sort((a, b) => {
// 		console.log(a.title[0] > b.title[0])
// 		if (a.title[0] > b.title[0]) {
// 			return 1
// 		}
// 		if (a.title[0] < b.title[0]) {
// 			return -1
// 		}
// 		return 0
// 	}),
// )
