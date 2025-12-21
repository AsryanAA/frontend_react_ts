import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            // '@components': path.resolve(__dirname, './src/components'),
            // '@pages': path.resolve(__dirname, './src/pages'),
            // '@layouts': path.resolve(__dirname, './src/layouts'),
            // '@hooks': path.resolve(__dirname, './src/hooks'),
            // '@utils': path.resolve(__dirname, './src/utils'),
            // '@services': path.resolve(__dirname, './src/services'),
            // '@types': path.resolve(__dirname, './src/types'),
            // '@assets': path.resolve(__dirname, './src/assets')
        }
    },
    build: {
        target: 'es2020',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    chakra: ['@chakra-ui/react', '@emotion/react', '@emotion/styled']
                }
            }
        }
    },
    server: {
        port: 3000,
        open: true
    }
})