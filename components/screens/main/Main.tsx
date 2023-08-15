'use client'

import { FC } from 'react'

import CarBanner from './car-banner/CarBanner'
import CarCatalog from './car-catalog/CarCatalog'

const Main: FC = () => {
	return (
		<>
			<CarBanner />
			<CarCatalog/>
		</>
	)
}

export default Main
