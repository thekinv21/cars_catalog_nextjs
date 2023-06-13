'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

export const useCustomSearch = () => {
	interface ICarData {
		make: string
		model: string
		car_type: string
		drive: string
	}

	const [data, setData] = useState<ICarData>({
		make: '',
		model: '',
		drive: '',
		car_type: ''
	})

	const handleChange = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (
			data.make === '' &&
			data.model === '' &&
			data.car_type === '' &&
			data.drive === ''
		)
			return toast.warn('Alanlari Doldurunuz!')
	}

	return {
		handleChange,
		handleSearch,
		data
	}
}
