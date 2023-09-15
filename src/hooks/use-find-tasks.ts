import { useState } from 'react'
import { useDebounce } from './use-debounce'

export const useFindTasks = (value: string, delay: number = 500) => {
	const [text, setText] = useState('')
	const debouncedValue = useDebounce(value, delay)

	return debouncedValue
}
