import { Header } from './header/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}
