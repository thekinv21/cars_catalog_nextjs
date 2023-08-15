const BASE_URL = process.env.REACT_APP_API_ADDRESS

export const END_POINTS = {
	CAR_CONTROLLER: {
		GET_WITH_NAME: `${BASE_URL}?make=audi`,
		GET_WITH_MODEL: `${BASE_URL}?model=:carModel`,
		GET_WITH_YEAR: `${BASE_URL}?year=:carYear`,
		GET_WITH_FUEL_TYPE: `${BASE_URL}?fueltype=:carFuelType`
	}
}
