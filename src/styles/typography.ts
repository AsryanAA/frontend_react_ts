import { defineRecipe } from '@chakra-ui/react'

export const textStyles = {
      'accent-2xl': {
            fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
            lineHeight: '0.9',
            letterSpacing: '-0.02em',
            fontWeight: '400'
      },
      'accent-xl': {
            fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
            lineHeight: '1',
            letterSpacing: '-0.01em',
            fontWeight: '400'
      },
      'accent-lg': {
            fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
            lineHeight: '1.1',
            fontWeight: '400'
      },
      'accent-md': {
            fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
            lineHeight: '1.2',
            fontWeight: '400'
      },
      'accent-sm': {
            fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
            lineHeight: '1.3',
            fontWeight: '400'
      },

      display: {
            fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
            lineHeight: '1.2',
            fontWeight: '700',
            letterSpacing: '-0.01em'
      },
      heading: {
            fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
            lineHeight: '1.3',
            fontWeight: '600'
      },
      subheading: {
            fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
            lineHeight: '1.4',
            fontWeight: '500'
      },
      body: {
            fontSize: 'md',
            lineHeight: '1.5',
            fontWeight: '400'
      },
      'body-sm': {
          fontSize: 'sm',
          lineHeight: '1.6',
          fontWeight: '400'
      },
      caption: {
          fontSize: 'xs',
          lineHeight: '1.7',
          fontWeight: '400',
          letterSpacing: '0.05em'
      }
}

export const typographyRecipe = defineRecipe({
    className: 'typography',
    base: {
        margin: '0',
        padding: '0',
        color: 'inherit'
    },
    variants: {
        variant: {
        'accent-2xl': {
            fontFamily: 'accent',
            fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
            lineHeight: '0.9',
            letterSpacing: '-0.02em',
            fontWeight: '400'
        },
        'accent-xl': {
            fontFamily: 'accent',
            fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
            lineHeight: '1',
            letterSpacing: '-0.01em',
            fontWeight: '400'
        },
        'accent-lg': {
            fontFamily: 'accent',
            fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
            lineHeight: '1.1',
            fontWeight: '400'
        },
        'accent-md': {
            fontFamily: 'accent',
            fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
            lineHeight: '1.2',
            fontWeight: '400'
        },
        'accent-sm': {
            fontFamily: 'accent',
            fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
            lineHeight: '1.3',
            fontWeight: '400'
        },
        display: {
            fontFamily: 'body',
            fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
            lineHeight: '1.2',
            fontWeight: '700',
            letterSpacing: '-0.01em'
        },
        heading: {
            fontFamily: 'body',
            fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
            lineHeight: '1.3',
            fontWeight: '600'
        },
        subheading: {
            fontFamily: 'body',
            fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
            lineHeight: '1.4',
            fontWeight: '500'
        },
        body: {
            fontFamily: 'body',
            fontSize: 'md',
            lineHeight: '1.5',
            fontWeight: '400'
        },
        'body-sm': {
            fontFamily: 'body',
            fontSize: 'sm',
            lineHeight: '1.6',
            fontWeight: '400'
        },
        caption: {
            fontFamily: 'body',
            fontSize: 'xs',
            lineHeight: '1.7',
            fontWeight: '400',
            letterSpacing: '0.05em'
        },
    },
    align: {
        left: { textAlign: 'left' },
        center: { textAlign: 'center' },
        right: { textAlign: 'right' },
        justify: { textAlign: 'justify' }
    },
    transform: {
        uppercase: { textTransform: 'uppercase' },
        lowercase: { textTransform: 'lowercase' },
        capitalize: { textTransform: 'capitalize' },
        normal: { textTransform: 'none' }
    },
    weight: {
        light: { fontWeight: '300' },
        normal: { fontWeight: '400' },
        medium: { fontWeight: '500' },
        semibold: { fontWeight: '600' },
        bold: { fontWeight: '700' },
        extrabold: { fontWeight: '800' }
    },
    truncate: {
        true: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    },
        noWrap: {
            true: { whiteSpace: 'nowrap' }
        }
    },
    defaultVariants: {
        variant: 'body',
        align: 'left',
        transform: 'normal',
        weight: 'normal'
    }
})
