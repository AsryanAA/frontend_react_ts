import { ReactNode } from 'react'

export interface ModalProps {
    isOpen: boolean
    onClose?: () => void
    header?: ReactNode
    body?: ReactNode
}