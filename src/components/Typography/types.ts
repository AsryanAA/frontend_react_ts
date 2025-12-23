import type { HTMLChakraProps } from '@chakra-ui/react'

export type TypographyVariant =
  | 'accent-2xl'
  | 'accent-xl'
  | 'accent-lg'
  | 'accent-md'
  | 'accent-sm'
  | 'display'
  | 'heading'
  | 'subheading'
  | 'body'
  | 'body-sm'
  | 'caption'

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify'
export type TypographyTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'normal'
export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

export interface TypographyProps extends HTMLChakraProps<'p'> {
  variant?: TypographyVariant
  as?: React.ElementType
  align?: TypographyAlign
  transform?: TypographyTransform
  weight?: TypographyWeight
  truncate?: boolean
  noWrap?: boolean
  children: React.ReactNode
}

export interface VariantStyle {
  fontFamily: string
  fontSize: string | { base: string; md: string; lg: string }
  lineHeight: string
  fontWeight: string
  letterSpacing?: string
}
