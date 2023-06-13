'use client'

import { ISearchMenuProps } from '@/types/index'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { FC, Fragment } from 'react'


import styles from './CustomSearchMenu.module.scss'
import { useCustomSearchMenu } from './useCustomSearchMenu'

const CustomSearchMenu: FC<ISearchMenuProps> = ({
	searchMenuValue,
	setSearchMenuValue
}) => {
	const { filteredCarsModel, value, setValue } = useCustomSearchMenu()

	return (
		<div className={styles.searchMenu_container}>
			<Combobox value={searchMenuValue} onChange={setSearchMenuValue}>
				<div className={styles.searchMenu_content}>
					<Combobox.Button className={styles.searchMenu_Input_Logo}>
						<Image src={`/car-logo.svg`} alt='carlogo' width={20} height={20} />
					</Combobox.Button>

					<Combobox.Input
						className={styles.searchMenu__input}
						placeholder='Araba Arayiniz...'
						displayValue={(searchMenu: string) => searchMenu}
						onChange={e => setValue(e.target.value)}
					/>

					<Transition
						as={Fragment}
						leave='transition ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
						afterLeave={() => setValue('')}
					>
						<Combobox.Options>
							{filteredCarsModel.length === 0 && value !== '' ? (
								<Combobox.Option
									value={value}
									className={styles.searchMenu_option}
								>
									{value} : Bulunamadi..
								</Combobox.Option>
							) : (
								filteredCarsModel.map(item => (
									<Combobox.Option
										key={item}
										className={({ active }) =>
											`relative mt-3 text-xs ${styles.searchMenu_option} ${
												active
													? 'bg-primary-blue text-white rounded-xl'
													: 'text-gray-900'
											}`
										}
										value={item}
									>
										{item}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	)
}

export default CustomSearchMenu
