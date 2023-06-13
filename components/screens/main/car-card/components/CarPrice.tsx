'use client'

import { FC } from 'react'

import styles from '../CarCard.module.scss'

type TypePrice = {
	make: string
	model: string
	carRent: string
}

const CarPrice: FC<TypePrice> = ({ make, model, carRent }) => {
	return (
		<>
			<div className={styles.car_card_content}>
				<h2 className={styles.car_card_content_title}>
					{make} : {model}
				</h2>
			</div>

			<p className={styles.car_card_carRent}>
				<span className={styles.span1}>$</span>
				{carRent}
				<span className={styles.span2}>/day</span>
			</p>
		</>
	)
}

export default CarPrice
