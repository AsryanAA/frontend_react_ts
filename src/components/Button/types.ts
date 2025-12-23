import React from 'react'

import type { HTMLChakraProps } from '@chakra-ui/react'
import type { TypographyProps } from '../Typography'

export interface ButtonProps extends HTMLChakraProps<'button'> {
    variant?:
        | 'solid'
        | 'accent-solid'
        | 'outline'
        | 'accent-outline'
        | 'ghost'
        | 'accent-ghost'
        | 'danger'
        | 'success'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
    fullWidth?: boolean
    loading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    accent?: boolean
    useTypography?: boolean
    typographyProps?: TypographyProps
}