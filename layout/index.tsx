import { LayoutProps } from './Layout.props'
import styles from './Layout.module.scss'
import Header from '../components/Header'

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            {children}
        </div>
    )
}

export default Layout
