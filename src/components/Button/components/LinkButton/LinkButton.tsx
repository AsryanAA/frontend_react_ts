import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '../../Button'
import { LinkButtonProps } from './types'

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  state,
  replace,
  relative,
  children,
  variant = 'solid',
  size = 'md',
  rounded = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  accent,
  ...buttonProps
}) => {
  return <RouterLink
      to={to}
      state={state}
      replace={replace}
      relative={relative}
      style={{
        textDecoration: 'none',
        display: fullWidth ? 'block' : 'inline-block',
        width: fullWidth ? '100%' : undefined
      }}
    >
      <Button
        variant={variant}
        size={size}
        rounded={rounded}
        fullWidth={fullWidth}
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        accent={accent}
        {...buttonProps}
      >
        {children}
      </Button>
    </RouterLink>
}
