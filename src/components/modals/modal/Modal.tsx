import { ReactNode } from 'react'

interface ModalProps {
	children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
	return (
		<div className="modal">
			<div className="wrap">{children}</div>
		</div>
	)
}
