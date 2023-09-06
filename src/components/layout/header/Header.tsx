import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header>
			<div className="container">
				<h1 className={styles.title}>TO-DO NOW</h1>
			</div>
		</header>
	)
}
