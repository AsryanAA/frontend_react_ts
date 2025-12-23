import type { FC } from 'react'
import type { TypographyProps } from '../../types'
import { Typography } from '@/components'

export const Subheading: FC<Omit<TypographyProps, 'variant'>> = props => <Typography variant='subheading' {...props} />
