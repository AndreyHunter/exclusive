import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': '/src',
            '@assets': '/src/assets',
            '@hooks': '/src/hooks',
            '@utils': '/src/utils',
            '@constants': '/src/constants',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@store': '/src/store',
            '@services': '/src/services',
        },
    },
});
