import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const handleChangeSearch = (
	event: ChangeEvent<HTMLInputElement>,
	setSearchValue: Dispatch<SetStateAction<string>>,
): void => {
	const { value } = event.target
	setSearchValue(value)
}
