import styles from './Main.module.scss'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineSortAscending } from 'react-icons/ai'
import { CreateTask } from '../../modals/create-task/Create-task'
import { Task } from '../../task/Task'
import { ITask } from '../../../shared/interfaces'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Loading } from '../../loading/Loading'

interface MainLayoutProps {
	prepareTodos: ITask[]
	foundTodos: ITask[] | null
	searchValue: string
	onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
	isSorted: boolean
	setIsSorted: Dispatch<SetStateAction<boolean>>
	isCreateTask: boolean
	setIsCreateTask: Dispatch<SetStateAction<boolean>>
	handleCreateTask: (newTask: ITask) => void
	handleUpdateTask: (editedTask: ITask) => void
	handleDeleteTask: (id: string) => void
	isLoading: boolean
}

export const MainLayout = ({
	prepareTodos,
	foundTodos,
	searchValue,
	onChangeSearch,
	isSorted,
	setIsSorted,
	isCreateTask,
	setIsCreateTask,
	handleCreateTask,
	handleUpdateTask,
	handleDeleteTask,
	isLoading,
}: MainLayoutProps) => {
	return (
		<>
			{isLoading && <Loading />}
			<div>
				<div className="container">
					<div className={styles.todos}>
						<button className={styles.createTask} onClick={() => setIsCreateTask(true)}>
							+
						</button>
						<div className={styles.search}>
							<input
								type="text"
								placeholder="Поиск задачи"
								value={searchValue}
								onChange={onChangeSearch}
							/>
							<div className={styles.searchIcon}>
								<BsSearch />
							</div>
						</div>
						<div className={styles.sort}>
							<button
								className={isSorted ? styles.active : ''}
								onClick={() => setIsSorted(!isSorted)}
							>
								<AiOutlineSortAscending />
							</button>
						</div>
						{isCreateTask && (
							<CreateTask
								handleCreateTask={handleCreateTask}
								onCloseModal={() => setIsCreateTask(false)}
							/>
						)}
						{prepareTodos.length && !foundTodos ? (
							prepareTodos.map((task, index) => (
								<Task
									key={task.id}
									task={task}
									handleUpdateTask={handleUpdateTask}
									handleDeleteTask={handleDeleteTask}
								/>
							))
						) : (
							<div className={styles.void}>Пусто</div>
						)}
						{foundTodos &&
							foundTodos.map((task, index) => (
								<Task
									key={task.id}
									task={task}
									handleUpdateTask={handleUpdateTask}
									handleDeleteTask={handleDeleteTask}
								/>
							))}
					</div>
				</div>
			</div>
		</>
	)
}
