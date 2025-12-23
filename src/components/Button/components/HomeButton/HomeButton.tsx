import { FC } from 'react'
import { FiHome } from 'react-icons/fi'
import { ButtonProps } from '../../types'
import { Button } from '../../Button'

// кнопка на главную
export const HomeButton: FC<ButtonProps> = props => <Button variant="accent-outline" size="lg" rounded="full" leftIcon={<FiHome />} {...props}>
    На главную
  </Button>
