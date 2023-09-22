import styles from './Task.module.scss'
import { ITask } from '../../shared/interfaces/todo.interface'

interface TodoProps {
	task: ITask
}
export const Task = ({ task }: TodoProps) => {
	return <p className={styles.todo}>{task.title}</p>
}
