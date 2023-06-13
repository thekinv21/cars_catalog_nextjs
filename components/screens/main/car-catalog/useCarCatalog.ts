import { useGetCars } from '@/api/api'

export const useCarCatalog = () => {
	const { data, isLoading } = useGetCars()

	const allCars = data?.repsonse.data

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

	return {
		isLoading,
		isDataEmpty,
		allCars
	}
}
