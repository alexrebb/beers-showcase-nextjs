import { ChangeEventHandler } from 'react'

export interface InputProps {
    placeholder?: string
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
}
