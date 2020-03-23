console.log('Loading Nuxt Configuration file');

module.exports = {
    rootDir: process.cwd(),
    mode: 'spa',
    head: {
        title: 'Podcastless',
        meta: [{
                charsert: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Podcasts to love'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/svg',
            href: '/favicon.svg'
        }]
    },
    build: {
        extend(config, context) {
            // Run ESLint on save
            if (context.isDev) {
                if (context.isClient) {
                    console.log('devtool = source-map');
                    config.devtool = 'source-map'
                } else {
                    console.log('devtool = inline-source-map');
                    config.devtool = 'inline-source-map'
                }
            }
        }
    },
    modules: [
        'nuxt-fontawesome',
        '@nuxtjs/axios'
    ],
    fontawesome: {
        component: 'fa',
        imports: [{
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab']
            }
        ]
    }
}
