import { defineConfig, createSystem, defaultConfig } from '@chakra-ui/react'
import { typographyRecipe } from './typography'
import { buttonIconRecipe, buttonRecipe } from './button'

export const customConfig = defineConfig({
    theme: {
        // добавляем цветовую палитру
        tokens: {
            colors: {
                brand: {
                    50: { value: '#F5F0FF' },
                    100: { value: '#E9DFFE' },
                    200: { value: '#D5C5FD' },
                    300: { value: '#BBA2FC' },
                    400: { value: '#9F7FFA' },
                    500: { value: '#845CF9' },
                    600: { value: '#6C4AB6' }, // основной брендовый цвет
                    700: { value: '#543892' },
                    800: { value: '#3D286E' },
                    900: { value: '#27184A' }
                },
                primary: {
                    50: { value: '#F5F0FF' },
                    100: { value: '#E9DFFE' },
                    200: { value: '#D5C5FD' },
                    300: { value: '#BBA2FC' },
                    400: { value: '#9F7FFA' },
                    500: { value: '#845CF9' },
                    600: { value: '#6C4AB6' }, // основной цвет как брендовый
                    700: { value: '#543892' },
                    800: { value: '#3D286E' },
                    900: { value: '#27184A' }
                }
            },
            fonts: {
                accent: {
                    value: "'Dela Gothic One', cursive"
                }
            }
        },
        // добавляем семантические токены для удобного использования
        semanticTokens: {
            colors: {
                // основные семантические цвета
                'brand.primary': { value: '{colors.brand.600}' },
                'brand.light': { value: '{colors.brand.100}' },
                'brand.dark': { value: '{colors.brand.800}' },

                // семантические имена для удобства
                primary: { value: '{colors.primary.600}' },
                'primary.light': { value: '{colors.primary.100}' },
                'primary.dark': { value: '{colors.primary.800}' },

                // для состояний
                'brand.hover': { value: '{colors.brand.500}' },
                'brand.active': { value: '{colors.brand.700}' },
                'brand.disabled': { value: '{colors.brand.300}' },

                // текстовые цвета на брендовом фоне
                onBrand: { value: '#FFFFFF' },
                'onBrand.light': { value: '{colors.brand.900}' }
            },

            // можно также добавить семантические токены для других свойств
            borders: {
                brand: { value: '2px solid {colors.brand.600}' }
            },

            shadows: {
                'brand.sm': { value: '0 1px 2px 0 rgba(108, 74, 182, 0.05)' },
                'brand.md': { value: '0 4px 6px -1px rgba(108, 74, 182, 0.1)' },
                'brand.lg': { value: '0 10px 15px -3px rgba(108, 74, 182, 0.1)' }
            }
        },
        recipes: {
            typography: typographyRecipe,
            button: buttonRecipe,
            buttonIcon: buttonIconRecipe
        }
    }
})

export const systemTheme = createSystem(defaultConfig, customConfig)