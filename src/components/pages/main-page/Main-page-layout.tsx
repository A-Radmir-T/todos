import styles from './Main-page.module.scss'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineSortAscending } from 'react-icons/ai'
import { CreateTask } from '../../modals/create-task/Create-task'
import { ITask } from '../../../shared/interfaces'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Loading } from '../../loading/Loading'
import { NavLink } from 'react-router-dom'

interface MainLayoutProps {
	preparedTodos: ITask[]
	searchValue: string
	onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
	isSorted: boolean
	setIsSorted: Dispatch<SetStateAction<boolean>>
	isCreateTask: boolean
	setIsCreateTask: Dispatch<SetStateAction<boolean>>
	handleCreateTask: (newTask: ITask) => void
	isLoading: boolean
}

export const MainPageLayout = ({
	preparedTodos,
	searchValue,
	onChangeSearch,
	isSorted,
	setIsSorted,
	isCreateTask,
	setIsCreateTask,
	handleCreateTask,
	isLoading,
}: MainLayoutProps) => {
	return (
		<>
			{isLoading && <Loading />}
			<div>
				<div className="container">
					<div className={styles.todos}>
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

						<div className={styles.links}>
							{preparedTodos.length ? (
								preparedTodos.map((task, index) => (
									<NavLink key={task.id} to={`/task/${task.id}`}>
										{task.title}
									</NavLink>
								))
							) : (
								<div className={styles.void}>Пусто</div>
							)}
						</div>
						<button className={styles.createTask} onClick={() => setIsCreateTask(true)}>
							+
						</button>

						{isCreateTask && (
							<CreateTask
								handleCreateTask={handleCreateTask}
								onCloseModal={() => setIsCreateTask(false)}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
