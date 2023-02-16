import { useEffect, useState } from "react"
import { secureStorage } from "Utilities/encryption"

const getValue = (key, initialValue) => {
	const item = JSON.parse(secureStorage.getItem(key))
	if (item !== null) return item
	if (initialValue instanceof Function) return initialValue()
	return initialValue
}

export const useSecureStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		return getValue(key, initialValue)
	})

	useEffect(() => {
		secureStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue]
}

