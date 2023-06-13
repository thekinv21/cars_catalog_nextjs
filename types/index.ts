import { MouseEventHandler } from 'react'

export interface ICustomButtonProps {
	title: string
	containerStyles?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	btnType?: 'button' | 'submit'
	textStyles?: string
	rightIcon?: string
	isDisabled?: boolean
}

export interface ISearchMenuProps {
	searchMenuValue: string
	setSearchMenuValue: (setSearchMenuValue: string) => void
}

export interface ICarProps {
	fuel_type: string
	model: string
	year: number
	displacement: number
	make: string
	cylinders: number
	city_mpg: number
	transmission: string
	drive: string
}
