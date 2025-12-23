import React from 'react'
import { chakra } from '@chakra-ui/react'
import { roundedStyles, sizeStyles, variantStyles } from './consts'
import { ButtonProps } from './types'
import { Typography } from '@/components'

export const Button: React.FC<ButtonProps> = ({
                                                  variant = 'solid',
                                                  size = 'md',
                                                  rounded = 'full',
                                                  fullWidth = false,
                                                  loading = false,
                                                  leftIcon,
                                                  rightIcon,
                                                  accent,
                                                  children,
                                                  disabled,
                                                  px = '12',
                                                  py = '2',
                                                  pb = '2',
                                                  useTypography = false,
                                                  typographyProps,
                                                  ...props
                                              }) => {
    const finalVariant =
        accent && !variant.includes('accent')
            ? (`accent-${variant}` as Required<Pick<ButtonProps, 'variant'>>['variant'])
            : (variant ?? 'solid')

    const isAccentVariant = finalVariant.includes('accent') || accent;

    const getTypographySize = () => {
        if (size === 'xs' || size === 'sm') return 'accent-sm'
        if (size === 'lg' || size === 'xl') return 'accent-md'

        return 'accent-md'
    }

    const defaultPb = pb === '2' ? (isAccentVariant ? '3' : pb) : pb

    return <chakra.button
        // базовые стили
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="600"
        transition="all 0.2s ease"
        cursor={loading ? 'wait' : disabled ? 'not-allowed' : 'pointer'}
        opacity={loading || disabled ? 0.7 : 1}
        outline="none"
        _focusVisible={{
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)'
        }}
        _disabled={{
            opacity: 0.5,
            cursor: 'not-allowed',
            pointerEvents: 'none'
        }}
        // Динамические стили
        width={fullWidth ? '100%' : undefined}
        {...variantStyles[finalVariant]}
        {...sizeStyles[size]}
        {...roundedStyles[rounded]}
        // Пропсы
        disabled={disabled || loading}
        aria-busy={loading}
        px={px}
        py={py}
        pb={defaultPb}
        {...props}
    >
        {leftIcon && <chakra.span mr={2} display="inline-flex" alignItems="center">
                {leftIcon}
            </chakra.span>
        }

        {
            useTypography || isAccentVariant ? <Typography as="span" variant={getTypographySize()} color="inherit" {...typographyProps}>
                    {children}
                </Typography> : children
        }

        {rightIcon && <chakra.span ml={2} display="inline-flex" alignItems="center">
                {rightIcon}
            </chakra.span>}

        {loading && <chakra.span ml={2}>
                <chakra.span
                    display="inline-block"
                    width="1em"
                    height="1em"
                    border="2px solid currentColor"
                    borderRightColor="transparent"
                    borderRadius="full"
                    animation="spin 0.75s linear infinite"
                    verticalAlign="middle"
                />
            </chakra.span>
        }
    </chakra.button>
}