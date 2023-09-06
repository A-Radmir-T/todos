import styles from './Todo.module.scss'
import { ITodo } from '../../models/todo.interface'

interface TodoProps {
	todo: ITodo
}
export const Todo = ({ todo }: TodoProps) => {
	return (
		<div className={styles.todo}>
			<p>{todo.title}</p>
		</div>
	)
}
