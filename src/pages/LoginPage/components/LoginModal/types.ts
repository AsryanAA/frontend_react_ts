import type { ModalProps } from '@/components/Modal'
import { z } from 'zod'
import { loginSchema } from './consts'

export interface LoginModalProps extends Pick<ModalProps, 'isOpen'> {
    onSuccess: () => void
}

export type LoginFormData = z.infer<typeof loginSchema>