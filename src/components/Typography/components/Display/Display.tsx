import type { FC } from 'react'
import type { TypographyProps } from '../../types'
import { Typography } from '@/components'

export const Display: FC<Omit<TypographyProps, 'variant'>> = props => <Typography variant='display' {...props} />
