import { BeerCard } from './BeerCard'
import styles from './BeerCardList.module.scss'
import Link from 'next/link'
import { Beers } from '../../types'

type beersProps = {
    beers: Beers[]
}

export const BeerCardlist = ({ beers }: beersProps) => {
    return (
        <div className={styles.container}>
            {beers?.map((beer) => (
                <Link href={`/${beer.id}`} key={beer.id}>
                    <a>
                        <BeerCard
                            name={beer.name}
                            img_url={beer.image_url}
                            descr={beer.description}
                        />
                    </a>
                </Link>
            ))}
        </div>
    )
}
