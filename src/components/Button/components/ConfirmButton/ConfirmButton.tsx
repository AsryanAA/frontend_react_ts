import { FC } from 'react'
import { FiCheck } from 'react-icons/fi'
import { ButtonProps } from '../../types'
import { Button } from '../../Button'

// кнопка подтверждения
export const ConfirmButton: FC<ButtonProps> = props => <Button variant="success" size="lg" leftIcon={<FiCheck />} {...props} />
