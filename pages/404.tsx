import Link from 'next/link'

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>Page not found</h2>
            <Link href="/">
                <a>
                    <p>Go to Home page</p>
                </a>
            </Link>
        </div>
    )
}

export default NotFoundPage
