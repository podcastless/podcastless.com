module.exports = {
    modules: [
        'nuxt-fontawesome'
    ],
    fontawesome: {
        component: 'fa',
        imports: [
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: [ 'fas' ]
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: [ 'fab' ]
            }
        ]
    }
}
