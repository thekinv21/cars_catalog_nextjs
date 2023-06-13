'use client'

import { CustomButton } from '@/import/index'
import { ICarProps } from '@/types/index'
import { FC, useState } from 'react'

import { calculateCarRent } from '@/utils/index'

import CarDetails from '../car-details/CarDetails'
import styles from './CarCard.module.scss'
import CarImage from './components/CarImage'
import CarInfo from './components/CarInfo'
import CarPrice from './components/CarPrice'

interface ICarCardProps {
	car: ICarProps
}

const CarCard: FC<ICarCardProps> = ({ car }) => {
	const {
		year,
		model,
		displacement,
		make,
		fuel_type,
		cylinders,
		city_mpg,
		transmission,
		drive
	} = car

	const [isOpen, setIsOpen] = useState(false)

	const carRent = calculateCarRent(city_mpg, year)

	return (
		<div className={styles.car_card_container}>
			<CarPrice make={make} model={model} carRent={carRent} />

			<CarImage />

			<CarInfo transmission={transmission} drive={drive} city_mpg={city_mpg} />

			<div className={styles.car_card__btn_container}>
				<CustomButton
					title='Daha fazlasi'
					containerStyles='w-full py-[12px] rounded-xl bg-primary-blue text-white'
					textStyles='text-white text-[12px]'
					rightIcon='/right-arrow.svg'
					handleClick={() => setIsOpen(true)}
				/>
			</div>

			<CarDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	)
}

export default CarCard
