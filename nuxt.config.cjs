console.log('Loading Nuxt Configuration file');

module.exports = {
    rootDir: process.cwd(),
    mode: 'spa',
    header: {
        title: 'Podcastless',
        meta: [
            { charsert: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Podcasts to love' }
        ],
        link: [
            { rel: 'icon', type: 'image/svg', href: '~assets/img/logo.svg' }
        ]
    },
    build: {
        extend(config, {
            isClient
        }) {
            config.devtool = isClient ?
                'source-map' :
                'inline-source-map';
        }
    },
    modules: [
        'nuxt-fontawesome'
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
