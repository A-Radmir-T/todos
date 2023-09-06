import styles from './Main.module.scss'
import { Todo } from '../../todo/Todo'
import { todosService } from '../../../services/todos.service'
import { useEffect, useState } from 'react'
import { ITodo } from '../../../models/todo.interface'

export const Main = () => {
	const [todosData, setTodosData] = useState<ITodo[]>([])

	useEffect(() => {
		todosService.getAllTodos().then((data) => {
			setTodosData(data)
		})
	}, [])

	return (
		<div>
			<div className="container">
				<div className={styles.todos}>
					{todosData &&
						todosData.map((todo, index) => <Todo todo={todo} key={todo.id} />)}
				</div>
			</div>
		</div>
	)
}
