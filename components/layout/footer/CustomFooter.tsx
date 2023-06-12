import { footerLinks } from '@/constants/index'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './CustomFooter.module.scss'

const CustomFooter: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_content}>
				<div className={styles.footer_logo}>
					<Image
						src={`/logo.svg`}
						alt='footer logo'
						width={118}
						height={18}
						className='object-contain'
						draggable={false}
					/>

					<p className={styles.footer_desc}>
						CarHub 2023 <br />
						Sizin Hizmetinizde &copy;
					</p>
				</div>

				<div className={styles.footer_links_container}>
					{footerLinks.map(link => (
						<div key={link.title} className={styles.footer_link}>
							<h3 className='font-bold text-xl mb-4'>{link.title}</h3>

							{link.links.map(item => (
								<Link className='text-sm text-gray-700' href={item.url}>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>

			<div className={styles.footer_copyright}>
				<p>@2023 CarHub. Hizli ve Güvenli Rezervasyonlar</p>
				<div>
					<Link className='text-gray-500 text-xs' href={`/`}>
						Güvenli ve Hizli
					</Link>
					<Link className='text-gray-500 text-xs' href={`/`}>
						Bilgiler Gizlidir
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default CustomFooter
