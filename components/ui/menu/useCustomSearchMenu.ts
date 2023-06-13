import { carModels } from '@/constants/index'
import { useState } from 'react'

export const useCustomSearchMenu = () => {
	const [value, setValue] = useState('')

	const filteredCarsModel =
		value === ''
			? carModels
			: carModels.filter(item =>
					item
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(value.toLowerCase().replace(/\s+/g, ''))
			  )

	return {
		filteredCarsModel,
		value,
		setValue
	}
}
