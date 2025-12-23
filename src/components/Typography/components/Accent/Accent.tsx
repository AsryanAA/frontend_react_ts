import type { FC } from 'react'
import type { TypographyProps } from '../../types'
import { Typography } from '@/components'

export const Accent: FC<
  Omit<TypographyProps, 'variant'> & { size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' }
> = ({ size = 'lg', ...props }) => <Typography variant={`accent-${size}`} {...props} />
