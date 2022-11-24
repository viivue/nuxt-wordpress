// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    //components: true,

    runtimeConfig: {
        // The private keys which are only available server-side

        // connect to api provider
        apiURL: 'https://dev.mochisandbox.com/vantotec/eevee/eevee/v1',

        // Keys within public are also exposed client-side
        public: {}
    },


    /**
     * App
     */
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nuxt - WordPress',
            meta: [
                // <meta name="description" content="My amazing site">
                //{name: 'description', content: 'My amazing site.'}
            ]
        },

        baseURL: '/nuxtwp',

        // https://nuxt.com/docs/getting-started/transitions
        pageTransition: {name: 'page', mode: 'out-in'},
    },


    /**
     * Global CSS
     * https://nuxtjs.org/docs/configuration-glossary/configuration-css
     */
    css: [
        'honcau',
        '@viivue/atomic-css',
        '@/assets/css/fonts.css',
        '@/assets/css/style.scss',
    ],


    /**
     * Modules
     */
    modules: [
        //'@pinia/nuxt'
    ],
});