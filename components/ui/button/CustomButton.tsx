import { ICustomButtonProps } from '@/types/index'
import Image from 'next/image'
import { FC } from 'react'

const CustomButton: FC<ICustomButtonProps> = ({
	title,
	containerStyles,
	handleClick,
	textStyles,
	isDisabled,
	rightIcon,
	btnType
}) => {
	return (
		<button
			disabled={isDisabled}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>

			{rightIcon && (
				<div className='relative w-6 h-6'>
					<Image
						src={rightIcon}
						alt='righIcon'
						fill
						className='object-contain'
					/>
				</div>
			)}
		</button>
	)
}

export default CustomButton
