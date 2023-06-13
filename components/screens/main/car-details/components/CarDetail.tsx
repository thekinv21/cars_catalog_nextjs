import { ICarProps } from '@/types/index'
import { FC } from 'react'

interface ICarCardProp {
	car: ICarProps
}

const CarDetail: FC<ICarCardProp> = ({ car }) => {
	return (
		<div className='flex-1 flex flex-col gap-2 px-5'>
			<h2 className='font-semibold uppercase text-base text-grey'>
				{car.make} : {car.model}
			</h2>

			<div className='mt-3 flex flex-wrap gap-4'>
				{Object.entries(car).map(([key, value]) => (
					<div
						className='flex justify-between gap-5 w-full text-right mb-2'
						key={key}
					>
						<h4 className='text-xs uppercase'>{key}</h4>
						<p className='text-xs uppercase'>{value}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default CarDetail
