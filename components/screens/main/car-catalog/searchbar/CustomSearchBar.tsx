'use client'

import Image from 'next/image'
import { FC } from 'react'

import styles from './CustomSearchBar.module.scss'
import { useCustomSearch } from './useCustomSearch'

const SearchButton = ({ otherClassnames }: { otherClassnames: string }) => (
	<button type='submit' className={`-ml-3 z-10 ${otherClassnames}`}>
		<Image
			src={`/magnifying-glass.svg`}
			alt='searchButton'
			width={40}
			height={20}
			className='object-contain'
			draggable={false}
		/>
	</button>
)

const CustomSearchbar: FC = () => {
	const { handleChange, handleSearch, data } = useCustomSearch()

	return (
		<form className={styles.searchbar} onSubmit={handleSearch}>
			<div className={styles.searchbar__item}>
				<Image
					draggable={false}
					src={`/car-logo.svg`}
					width={25}
					height={25}
					alt='car model icon'
					className='absolute w-[20px] h-[20px] ml-4'
				/>

				<input
					type='text'
					name='make'
					value={data.make}
					onChange={handleChange}
					placeholder='Car Make'
					className={styles.searchbar__input}
					autoComplete='off'
				/>

				<SearchButton otherClassnames='sm:hidden' />
			</div>

			<div className={styles.searchbar__item}>
				<Image
					draggable={false}
					src={`/model-icon.png`}
					width={25}
					height={25}
					alt='car model icon'
					className='absolute w-[20px] h-[20px] ml-4'
				/>

				<input
					type='text'
					name='model'
					value={data.model}
					onChange={handleChange}
					placeholder='Car model'
					className={styles.searchbar__input}
					autoComplete='off'
				/>

				<SearchButton otherClassnames='sm:hidden' />
			</div>

			<div className={styles.searchbar__item}>
				<Image
					draggable={false}
					src={`/tire.svg`}
					alt='tire'
					width={25}
					height={25}
					className='absolute w-[20px] h-[20px] ml-4'
				/>

				<input
					type='text'
					name='drive'
					value={data.drive}
					onChange={handleChange}
					placeholder='Drive '
					className={styles.searchbar__input}
					autoComplete='off'
				/>

				<SearchButton otherClassnames='sm:hidden' />
			</div>

			<div className={styles.searchbar__item}>
				<Image
					draggable={false}
					src={`/gas.svg`}
					width={25}
					height={25}
					alt='gas icon'
					className='absolute w-[20px] h-[20px] ml-4'
				/>

				<input
					type='text'
					name='car_type'
					value={data.car_type}
					onChange={handleChange}
					placeholder='Car Type'
					className={styles.searchbar__input}
					autoComplete='off'
				/>

				<SearchButton otherClassnames='sm:hidden' />
			</div>

			<SearchButton otherClassnames='max-sm:hidden' />
		</form>
	)
}

export default CustomSearchbar
