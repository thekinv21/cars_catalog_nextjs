import { apiKey } from '@/constants/apiKey'
import { END_POINTS } from '@/constants/endpoints'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

//*============GET CARS BY NAME===========
const getCarWithName = async () => {
	const URL = END_POINTS.CAR_CONTROLLER.GET_WITH_NAME

	const repsonse = await axios.get(URL, { headers: apiKey.headers })
	return { repsonse }
}

export const useGetByName = () => {
	const { data, isLoading, refetch } = useQuery(['getCarsWithName'], () =>
		getCarWithName()
	)
	return { data, isLoading, refetch }
}

//*============GET CARS BY MODEL===========
const getCarWithModel = async () => {
	const URL = END_POINTS.CAR_CONTROLLER.GET_WITH_MODEL

	const repsonse = await axios.get(URL, { headers: apiKey.headers })
	return { repsonse }
}

export const useGetCars = () => {
	const { data, isLoading, refetch } = useQuery(['getCars'], () =>
		getCarWithModel()
	)
	return { data, isLoading, refetch }
}
