import { Header } from './header/Header'
import { ReactNode } from 'react'

interface HeaderProps {
	children: ReactNode
}

export const Layout = ({ children }: HeaderProps) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
