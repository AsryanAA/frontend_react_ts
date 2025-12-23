import { FC } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { ButtonProps } from '../../types'
import { Button } from '../../Button'

// CTA кнопка (акцентная с иконкой)
export const CTAButton: FC<ButtonProps> = props => <Button
    variant="accent-solid"
    size="lg"
    rounded="full"
    px={8}
    rightIcon={<FiArrowRight />}
    {...props}
  />
