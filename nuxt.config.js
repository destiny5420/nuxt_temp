/**
 * 網站資訊
 */
const WEB_INFO = {}
    WEB_INFO.TITLE = ''
    WEB_INFO.KEYWORD = ''
    WEB_INFO.DESCRIPTION = ''
    WEB_INFO.URL = process.env.url || ''
    WEB_INFO.OG_IMG = WEB_INFO.URL + '/og.png'
    WEB_INFO.OG_IMG_WIDTH = 1200
    WEB_INFO.OG_IMG_HEIGHT = 630

/**
 * 字體加載
 */
const FONT = {
}
    FONT.GOOGLE = ''
    FONT.JUSTFONT = ''

console.log('[NODE_ENV]', process.env.NODE_ENV)
console.log('[APPLE]', process.env.url)

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: WEB_INFO.TITLE,
        htmlAttrs: {
            lang: "zh-tw",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1, viewport-fit=cover",
            },
            { name: "format-detection", content: "telephone=no" },

            // favicon
            { name: "msapplication-TileColor", content: "#da532c" },
            { name: "theme-color", content: "#ffffff" },

            // web meta
            { hid: "description", name: "description", content: WEB_INFO.DESCRIPTION },
            { hid: "Keywords", name: "Keywords", content: WEB_INFO.KEYWORD },

            // og
            { property: "og:title", content: WEB_INFO.TITLE },
            { property: "og:description", content: WEB_INFO.DESCRIPTION },
            { property: "og:type", content: "website" },
            { property: "og:site_name", content: WEB_INFO.TITLE },
            { property: "og:image", content: WEB_INFO.OG_IMG },
            { property: "og:url", content: WEB_INFO.URL },
            { property: "og:locale", content: "zh_tw" },

            // twitter
            { property: "twitter:card", content: "summary" },
            { property: "twitter:title", content: WEB_INFO.TITLE },
            { property: "twitter:description", content: WEB_INFO.DESCRIPTION },
            { property: "twitter:image", content: WEB_INFO.OG_IMG },
            { property: "twitter:image:width", content: WEB_INFO.OG_IMG_WIDTH },
            { property: "twitter:image:height", content: WEB_INFO.OG_IMG_HEIGHT }
        ],
        link: [
            // favicon
            { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-touch-icon.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
            { rel: "manifest", href: "/favicon/site.webmanifest" },

            // google font
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: '' },
            { rel: "stylesheet", href: FONT.GOOGLE }
        ],
        script: [
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~/assets/stylesheets/_reset.sass",
        "~/assets/stylesheets/_utils.sass",
        "~/assets/stylesheets/_keyframes.sass",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/filters.js' },
        // { src: '~/plugins/ytEmbed.js', ssr: false },
        // { src: '~/plugins/gsap.js', ssr: false },
        // { src: '~/plugins/Swiper.js', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        "@nuxtjs/style-resources"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    styleResources: {
        sass: [
            "./assets/stylesheets/_function.sass",
            "./assets/stylesheets/_mixin.sass",
            "./assets/stylesheets/_font.sass",
        ],
        hoistUseStatements: true,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
