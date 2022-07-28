import { API_URL } from '../service/constans'
import { BeerInfo } from '../components/BeerInfo/BeerInfo'
import { GetServerSideProps } from 'next'
import { Beers } from '../types'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id
    const res = await fetch(`${API_URL}/${id}`)
    const data = await res.json()

    console.log(data)

    if (data.statusCode === 400) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            beer: data,
        },
    }
}

type BeerProps = {
    beer: Beers[]
}

const Beer = ({ beer }: BeerProps) => {
    return (
        <>
            <BeerInfo beer={beer[0]} />
        </>
    )
}

export default Beer
