require('dotenv').config();

export default {
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Desafio Vue.js NoTyped',
        htmlAttrs: {
            lang: 'en'
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'assets/global.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-paycard.js', mode: 'client' },
        '@/plugins/vuelidate',
        '~/plugins/v-mask.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    router: {
        base: '/'
    },
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        browserBaseURL: '/'
    },

    /* security: {
        corsHandler: {
            origin: '*', // Permitir todas as origens
            methods: ['GET', 'POST', 'DELETE', 'PUT'], // Métodos HTTP permitidos
            allowHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
            exposeHeaders: ['Content-Length', 'X-Knowledge'], // Cabeçalhos expostos
            credentials: true, // Permitir cookies e autenticação
            maxAge: '86400', // Tempo máximo que a resposta pode ser cacheada
        }
    }, */
};
