import { CustomButton } from '@/import/index'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './CustomNavbar.module.scss'

const CustomNavbar: FC = () => {
	return (
		<header className='w-full  absolute z-10'>
			<nav className={styles.navbar}>
				<Link href='/' className={styles.navbarLogo}>
					<Image
						src='/logo.svg'
						alt='logo'
						width={118}
						height={18}
						className='object-contain'
						draggable={false}
					/>
				</Link>

				<CustomButton
					title='Giriş Yap'
					textStyles='text-xs text-white uppercase'
					btnType='button'
					containerStyles='rounded-full bg-primary-blue min-w-[130px] '
				/>
			</nav>
		</header>
	)
}

export default CustomNavbar
