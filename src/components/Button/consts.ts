// стили для вариантов
export const variantStyles = {
    solid: {
        bg: 'black',
        color: 'white',
        _hover: { bg: 'gray.800' }
    },

    'accent-solid': {
        bg: 'brand.600',
        color: 'white',
        _hover: { bg: 'brand.500' }
    },

    outline: {
        bg: 'transparent',
        color: 'gray.800',
        border: '2px solid',
        borderColor: 'gray.300',
        _hover: {
            bg: 'gray.50',
            borderColor: 'gray.400'
        }
    },

    'accent-outline': {
        bg: 'transparent',
        color: 'brand.600',
        border: '2px solid',
        borderColor: 'brand.300',
        _hover: {
            bg: 'brand.50',
            borderColor: 'brand.400'
        }
    },

    ghost: {
        bg: 'transparent',
        color: 'gray.700',
        border: 'none',
        _hover: { bg: 'gray.100' }
    },

    'accent-ghost': {
        bg: 'transparent',
        color: 'brand.600',
        border: 'none',
        _hover: {
            bg: 'brand.50'
        }
    },

    danger: {
        bg: 'red.500',
        color: 'white',
        _hover: { bg: 'red.600' }
    },

    success: {
        bg: 'green.500',
        color: 'white',
        _hover: { bg: 'green.600' }
    }
}

// стили для размеров
export const sizeStyles = {
    xs: { fontSize: 'xs', px: 2, py: 1, height: 6 },
    sm: { fontSize: 'sm', px: 3, py: 1.5, height: 8 },
    md: { fontSize: 'md', px: 4, py: 2, height: 10 },
    lg: { fontSize: 'lg', px: 6, py: 2.5, height: 12 },
    xl: { fontSize: 'xl', px: 8, py: 3, height: 14 }
}

// стили для скругления
export const roundedStyles = {
    none: { borderRadius: '0' },
    sm: { borderRadius: '0.25rem' },
    md: { borderRadius: '0.375rem' },
    lg: { borderRadius: '0.5rem' },
    full: { borderRadius: '9999px' }
}