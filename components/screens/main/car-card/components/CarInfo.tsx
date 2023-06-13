'use client'

import Image from 'next/image'
import { FC } from 'react'

import styles from '../CarCard.module.scss'

type TypeInfo = {
	transmission: string
	drive: string
	city_mpg: number
}

const CarInfo: FC<TypeInfo> = ({ transmission, drive, city_mpg }) => {
	return (
		<div className={styles.carInfo}>
			<div className={styles.carTransmission_container}>
				<div className={styles.carTransmission_content}>
					<Image
						src={`/steering-wheel.svg`}
						alt='steering wheel'
						height={20}
						width={20}
						draggable={false}
					/>
					<p className='text-[14px]'>
						{transmission === 'a' ? 'Avtomat' : 'Manuel'}
					</p>
				</div>

				<div className={styles.carTransmission_content}>
					<Image
						src={`/tire.svg`}
						alt='tire'
						height={20}
						width={20}
						draggable={false}
					/>
					<p className='text-[14px]'>{drive.toUpperCase()}</p>
				</div>

				<div className={styles.carTransmission_content}>
					<Image
						src={'/gas.svg'}
						alt='gas logo'
						height={20}
						width={20}
						draggable={false}
					/>
					<p className='text-[14px]'>{city_mpg} MPG</p>
				</div>
			</div>
		</div>
	)
}

export default CarInfo
