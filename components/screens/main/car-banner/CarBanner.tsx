import Image from 'next/image'
import { FC } from 'react'

import { CustomButton } from '../../../../import'
import styles from './CarBanner.module.scss'

const CarBanner: FC = () => {
	const handleScroll = () => {}

	return (
		<div className={styles.banner}>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className={styles.banner_title}>
					Araba bulun, ayırtın, kiralayın - hızlı ve çok kolay!
				</h1>

				<p className={styles.banner_subtitle}>
					Zahmetsiz , rezervasyon sürecimizle araç kiralama deneyiminizi
					kolaylaştırın.
				</p>

				<CustomButton
					title='Arabalari Keşfet'
					containerStyles='bg-primary-blue text-white rounded-full mt-10 text-sm'
					handleClick={handleScroll}
				/>
			</div>
			<div className={styles.banner_image_block}>
				<div className={styles.banner_image}>
					<Image
						src={`/hero.png`}
						alt='image'
						fill
						className='object-contain'
						draggable={false}
						priority
						sizes='(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw'
					/>

					<div className={styles.banner_image_overlay} />
				</div>
			</div>
		</div>
	)
}

export default CarBanner
