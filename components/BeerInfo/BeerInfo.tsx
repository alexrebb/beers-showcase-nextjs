import Image from 'next/image'
import styles from './BeerInfo.module.scss'
import { Beers } from '../../types'

type BeerInfoProps = {
    beer: Beers
}

export const BeerInfo = ({ beer }: BeerInfoProps) => {
    const { image_url, name, tagline, description, abv, food_pairing } = beer

    return (
        <div className={styles.container}>
            {image_url && (
                <Image
                    src={image_url}
                    alt="Картинка"
                    width="100px"
                    height="100%"
                />
            )}
            <div className={styles.wrapper}>
                <p className={styles.name}>{name}</p>
                <p>{tagline}</p>
                <p>{description}</p>
                <p>Abv {abv}</p>
                <p>{food_pairing}</p>
            </div>
        </div>
    )
}
