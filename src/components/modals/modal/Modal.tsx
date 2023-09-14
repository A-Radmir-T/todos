import { ReactNode } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
	children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
	return (
		<div className={styles.modal}>
			<div className={styles.wrap}>{children}</div>
		</div>
	)
}
