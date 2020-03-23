<template>
    <header>
        <nuxt-link to="/" class="logo">
            <img src="~/assets/img/logo.svg" alt="Podcastless">
        </nuxt-link>
        <nav class="menu">
            <nuxt-link to="/">home</nuxt-link>
            <nuxt-link to="/shows">shows</nuxt-link>
            <nuxt-link to="/about">about us</nuxt-link>
        </nav>
        <nav class="social">
            <a href="https://facebook.com/podcastless"><fa :icon="['fab', 'facebook']" /></a>
            <a href="https://instagram.com/podcastless"><fa :icon="['fab', 'instagram']" /></a>
            <a href="https://twitter.com/podcastless"><fa :icon="['fab', 'twitter']" /></a>
        </nav>
    </header>
</template>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

header {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr auto;
    grid-template-areas: "logo logo-gap menu menu-gap social";
    align-items: center;

    width: 85%;
}

.logo {
    grid-area: logo;
    height: 3em;
}

.logo img {
    height: 100%;
}

.menu {
    display: none;
}

.social {
    grid-area: social;
}

@media (min-width: 768px) {
    header {
        grid-template-columns: auto 3em auto 1fr auto;
    }

    .menu {
        display: inline-block;
        grid-area: menu;
    }

    .menu a:not(:last-child) {
        margin-inline-end: 2.5em;
    }
}
</style>
