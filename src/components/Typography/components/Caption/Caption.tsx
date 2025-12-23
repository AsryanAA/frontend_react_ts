import type { FC } from 'react'
import type { TypographyProps } from '../../types'
import { Typography } from '@/components'

export const Caption: FC<Omit<TypographyProps, 'variant'>> = props => <Typography variant="caption" {...props} />
