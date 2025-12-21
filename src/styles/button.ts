import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
    className: 'button',
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        borderRadius: 'md',
        transition: 'all 0.2s',
        cursor: 'pointer',
        border: '2px solid transparent',
        _disabled: {
              opacity: 0.5,
              cursor: 'not-allowed',
              pointerEvents: 'none'
        },
        _focusVisible: {
              outline: '2px solid',
              outlineColor: 'blue.500',
              outlineOffset: '2px'
        },
    },

    variants: {
        variant: {
              // основные варианты
              solid: {
                    bg: 'black.500',
                    color: 'white',
                    _hover: { bg: 'black.600' },
                    _active: { bg: 'black.700' }
              },
              'accent-solid': {
                    bg: 'blue.500',
                    color: 'white',
                    fontFamily: 'accent',
                    _hover: { bg: 'blue.600' },
                    _active: { bg: 'blue.700' }
              },
              outline: {
                    bg: 'transparent',
                    color: 'black.500',
                    borderColor: 'black.300',
                    _hover: {
                      bg: 'black.50',
                      borderColor: 'black.500'
                    },
                    _active: { bg: 'black.100' }
              },
              'accent-outline': {
                    bg: 'transparent',
                    color: 'blue.500',
                    borderColor: 'blue.300',
                    fontFamily: 'accent',
                    _hover: {
                      bg: 'blue.50',
                      borderColor: 'blue.500'
                    },
                    _active: { bg: 'blue.100' }
              },
              ghost: {
                    bg: 'transparent',
                    color: 'black.500',
                    _hover: { bg: 'black.50' },
                    _active: { bg: 'black.100' }
              },
              'accent-ghost': {
                    bg: 'transparent',
                    color: 'blue.500',
                    fontFamily: 'accent',
                    _hover: { bg: 'blue.50' },
                    _active: { bg: 'blue.100' }
              },
              danger: {
                    bg: 'red.500',
                    color: 'white',
                    _hover: { bg: 'red.600' },
                    _active: { bg: 'red.700' }
              },
              success: {
                    bg: 'green.500',
                    color: 'white',
                    _hover: { bg: 'green.600' },
                    _active: { bg: 'green.700' }
              }
        },

        size: {
              xs: {
                    fontSize: 'xs',
                    px: 2,
                    py: 1,
                    gap: 1
              },
              sm: {
                    fontSize: 'sm',
                    px: 3,
                    py: 1.5,
                    gap: 1.5
              },
              md: {
                    fontSize: 'md',
                    px: 4,
                    py: 2,
                    gap: 2
              },
              lg: {
                    fontSize: 'lg',
                    px: 6,
                    py: 2.5,
                    gap: 2.5
              },
              xl: {
                    fontSize: 'xl',
                    px: 8,
                    py: 3,
                    gap: 3
              }
        },

        rounded: {
              none: { borderRadius: '0' },
              sm: { borderRadius: 'sm' },
              md: { borderRadius: 'md' },
              lg: { borderRadius: 'lg' },
              full: { borderRadius: 'full' }
        },

        fullWidth: {
              true: { width: '100%' }
        },

        loading: {
              true: {
                    opacity: 0.8,
                    cursor: 'wait'
              }
        }
    },

    defaultVariants: {
        variant: 'solid',
        size: 'md',
        rounded: 'md'
    }
})

// рецепт для иконки внутри кнопки
export const buttonIconRecipe = defineRecipe({
      className: 'button-icon',
      base: {
            display: 'inline-flex',
            alignItems: 'center'
      },

      variants: {
            size: {
                  xs: { fontSize: 'sm' },
                  sm: { fontSize: 'md' },
                  md: { fontSize: 'lg' },
                  lg: { fontSize: 'xl' },
                  xl: { fontSize: '2xl' }
            },
            position: {
                  left: { order: -1 },
                  right: { order: 1 }
            }
      }
})
