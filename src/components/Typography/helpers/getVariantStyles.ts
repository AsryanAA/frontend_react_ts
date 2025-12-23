import type { TypographyVariant, VariantStyle } from '../types'

export const getVariantStyles = (variant: TypographyVariant): VariantStyle => {
    const styles: Record<TypographyVariant, VariantStyle> = {
        // accent стили (Dela Gothic One)
        'accent-2xl': {
            fontFamily: 'accent',
            fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
            lineHeight: '0.9',
            fontWeight: '400',
            letterSpacing: '-0.02em'
        },
        'accent-xl': {
            fontFamily: 'accent',
            fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
            lineHeight: '1',
            fontWeight: '400',
            letterSpacing: '-0.01em'
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

        // body стили (Inter)
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
        }
    }

    return styles[variant]
}
