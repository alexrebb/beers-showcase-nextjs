import { InputProps } from './Input.props'
import styles from './Input.module.scss'

const Input: React.FC<InputProps> = ({
    onChange,
    placeholder,
    type,
    value,
}) => {
    return (
        <input
            className={styles.input}
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default Input
