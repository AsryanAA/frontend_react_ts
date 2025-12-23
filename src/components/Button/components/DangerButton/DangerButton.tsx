import { FC } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { Button } from '../../Button'
import { ButtonProps } from '../../types'

// опасное действие
export const DangerButton: FC<ButtonProps> = props => <Button variant="danger" size="md" leftIcon={<FiTrash2 />} {...props}>
    Удалить
  </Button>
