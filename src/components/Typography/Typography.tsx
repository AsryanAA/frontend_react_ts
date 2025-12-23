import React from 'react'
import { chakra } from '@chakra-ui/react'
import { getVariantStyles } from './helpers'
import type { TypographyProps } from './types'
import { ACCENT_WEIGHT } from './consts'

export const Typography: React.FC<TypographyProps> = ({
  as = 'p',
  variant = 'body',
  align = 'left',
  transform = 'normal',
  weight = 'normal',
  truncate = false,
  noWrap = false,
  children,
  color = 'inherit',
  ...restProps
}) => {
  const variantStyles = getVariantStyles(variant)
  const isAccent = variant.startsWith('accent-')

  // фиксируем вес для accent шрифтов
  const finalWeight = isAccent ? ACCENT_WEIGHT : weight

  return <chakra.p
      as={as}
      margin="0"
      padding="0"
      color={color}
      fontFamily={variantStyles.fontFamily}
      fontSize={variantStyles.fontSize}
      lineHeight={variantStyles.lineHeight}
      fontWeight={finalWeight}
      letterSpacing={variantStyles.letterSpacing}
      textAlign={align}
      textTransform={transform}
      overflow={truncate ? 'hidden' : undefined}
      textOverflow={truncate ? 'ellipsis' : undefined}
      whiteSpace={noWrap || truncate ? 'nowrap' : undefined}
      {...restProps}
    >
      { children }
    </chakra.p>
}
