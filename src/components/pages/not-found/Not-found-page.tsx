import styles from './Not-found-page.module.scss'
import { Link, useMatch } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<div className="container">
			<div className={styles.wrap}>
				<h2 className={styles.title}>404</h2>
				<p className={styles.text}>Страница не найдена</p>
				<Link to="/" className={styles.link}>
					Перейти на главную
				</Link>
			</div>
		</div>
	)
}
