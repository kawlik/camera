import { defineConfig } from 'vite'

// required plugins
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// global config
import config from './src/config';


/*  Config
/*   *   *   *   *   *   *   *   *   *   */

export default defineConfig({

    // base url path
    base: '/camera/',

    // used plugins
    plugins: [

        // PWA easy setup
        VitePWA( config.PWA ),

        // react
        react(),
    ],

    // wsl dev server options
    server: {
        watch: {
            usePolling: true,
        }
    }
})
