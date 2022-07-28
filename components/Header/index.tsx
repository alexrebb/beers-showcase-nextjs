import styles from './Header.module.scss'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
    const [inputValue, setInputValue] = useState('')
    const router = useRouter()

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const goToSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue) return
        router.push({
            pathname: '/',
            query: {
                name: inputValue,
            },
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link href="/">
                    <a>
                        <h2 className={styles.h2}>Search beer</h2>
                    </a>
                </Link>
                <form className={styles.search} onSubmit={goToSearch}>
                    <Input
                        type="search"
                        placeholder="Searching for your beer..."
                        value={inputValue}
                        onChange={handleChangeInputValue}
                    />
                    <Button text="Search" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Header
