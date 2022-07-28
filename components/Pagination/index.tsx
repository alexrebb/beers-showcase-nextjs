import styles from './Pagination.module.scss'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../UI/Button'

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()

    const goToNextPage = () => {
        setCurrentPage((prev) => prev + 1)

        router.push({
            pathname: '/',
            query: {
                page: currentPage + 1,
            },
        })
    }

    const goToPrevPage = () => {
        if (currentPage === 1) return
        setCurrentPage((prev) => prev - 1)

        router.push({
            pathname: '/',
            query: {
                page: currentPage - 1,
            },
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.btn_wrapper}>
                {currentPage !== 1 && (
                    <Button text="Prev" onClick={goToPrevPage} />
                )}
                <Button text="Next" onClick={goToNextPage} />
            </div>
        </div>
    )
}

export default Pagination
