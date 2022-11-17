// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    components: true,
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: 'https://dev.mochisandbox.com/wordpress-vue',
            apiBaseJson: 'https://dev.mochisandbox.com/wordpress-vue/wp-json',
            api: 'https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2',
        }
    },

    /**
     * Global CSS
     * https://nuxtjs.org/docs/configuration-glossary/configuration-css
     */
    css: [
        '@viivue/atomic-css'
    ],

    /**
     * Modules
     */
    modules: [
        '@pinia/nuxt'
    ]
});