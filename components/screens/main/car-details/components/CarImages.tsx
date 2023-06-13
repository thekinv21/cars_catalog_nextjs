import Image from 'next/image'
import { FC } from 'react'

const CarImages: FC = () => {
	return (
		<div className=' flex-1 flex flex-col gap-3'>
			<div className='relative w-full h-40 bg-pattern  bg-cover bg-center rounded-lg'>
				<Image
					src={`/hero.png`}
					alt='carImage'
					fill
					priority
					className='object-contain'
					draggable={false}
				/>
			</div>

			<div className='flex gap-4 px-5'>
				<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
					<Image
						src={`/hero.png`}
						alt='carImage'
						fill
						priority
						className='object-contain'
						draggable={false}
					/>
				</div>
				<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
					<Image
						src={`/hero.png`}
						alt='carImage'
						fill
						priority
						className='object-contain'
						draggable={false}
					/>
				</div>

				<div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
					<Image
						src={`/hero.png`}
						alt='carImage'
						fill
						priority
						className='object-contain'
						draggable={false}
					/>
				</div>
			</div>
		</div>
	)
}

export default CarImages
