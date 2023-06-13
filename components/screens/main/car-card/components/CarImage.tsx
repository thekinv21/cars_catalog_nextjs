'use client'

import Image from 'next/image'
import { FC } from 'react'

import styles from '../CarCard.module.scss'

const CarImage: FC = () => {
	return (
		<div className={styles.car_image_container}>
			<Image
				src={`/hero.png`}
				alt='car image'
				fill
				priority
				sizes='(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw'
				className={`object-contain`}
				draggable={false}
			/>
		</div>
	)
}

export default CarImage
