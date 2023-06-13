import { CustomFilter, CustomSearchBar } from '@/import/index'
import { FC } from 'react'

import CarCard from '../car-card/CarCard'
import styles from './CarCatalog.module.scss'
import { useCarCatalog } from './useCarCatalog'

const CarCatalog: FC = () => {
	const { isDataEmpty, isLoading, allCars } = useCarCatalog()

	if (isLoading) return <>Loading Cars..</>

	return (
		<div className='padding-x padding-y max-width mt-12' id='discover'>
			<div>
				<h1 className={styles.catalog_text}>Araba Kategorileri</h1>
				<p className={styles.catalog_desc}>Beğendiğiniz arabayi bulunuz...</p>
			</div>

			<div className={styles.catalog_filters}>
				<CustomSearchBar />

				<div className={styles.catalog_filter_container}>
					<CustomFilter />
					<CustomFilter />
				</div>
			</div>

			{!isDataEmpty ? (
				<section >
					<div className={styles.cars_wrapper}>
						{allCars.map((car: any, index: number) => (
							<CarCard key={index} car={car} />
						))}
					</div>
				</section>
			) : (
				<div>Araba Bulunamadi</div>
			)}
		</div>
	)
}

export default CarCatalog
