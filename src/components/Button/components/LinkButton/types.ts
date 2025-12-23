import type { LinkProps } from 'react-router-dom'
import type { ButtonProps } from '../../types'

export interface LinkButtonProps extends ButtonProps {
  to: string
  state?: LinkProps['state']
  replace?: boolean
  relative?: 'route' | 'path'
}
