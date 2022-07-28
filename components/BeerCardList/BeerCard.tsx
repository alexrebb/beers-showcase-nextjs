import Image from 'next/image'
import styles from './BeerCardList.module.scss'
import { getLimitString } from '../../utils/getLimitString'

type BeerCardProps = {
    name?: string
    img_url?: string | null
    descr?: string
}

export const BeerCard = ({ name, img_url, descr }: BeerCardProps) => {
    const descrLimit = getLimitString(descr)

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                {img_url && (
                    <Image
                        src={img_url}
                        alt="Картинка"
                        width="20px"
                        height="70%"
                    />
                )}
            </div>

            <div className={styles.description}>
                <p className={styles.descr}>{name}</p>
                <span>{descrLimit}</span>
            </div>
        </div>
    )
}
