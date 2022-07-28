import { BeerCardlist } from '../components/BeerCardList'
import { API_URL } from '../service/constans'
import Pagination from '../components/Pagination'
import { Beers } from '../types'
import { GetServerSideProps } from 'next'

type beersProps = {
    beers: Beers[]
}

const Home = ({ beers }: beersProps) => {
    return (
        <div>
            {beers.length === 80 && <Pagination />}
            <BeerCardlist beers={beers} />
            {!beers.length && <p className="error">Oops...! Nothing found</p>}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    let data
    let res

    if (query.page) {
        res = await fetch(`${API_URL}?page=${query.page}&per_page=80`)
    }

    if (query.name) {
        res = await fetch(`${API_URL}?beer_name=${query.name}&per_page=80`)
    }

    if (!query.name && !query.page) {
        res = await fetch(`${API_URL}?page=1&per_page=80`)
    }

    data = await res?.json()

    if (data.statusCode === 400) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            beers: data,
        },
    }
}

export default Home
