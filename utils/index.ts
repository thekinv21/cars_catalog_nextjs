export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50
	const mileageFactor = 0.1
	const ageFactor = 0.05

	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor

	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

	return rentalRatePerDay.toFixed(0)
}
