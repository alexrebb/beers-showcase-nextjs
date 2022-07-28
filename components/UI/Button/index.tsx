import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
