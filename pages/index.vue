<template>
    <header>
        <img src="~/assets/img/logo.svg" alt="Podcastless">
        <h1>coming soon…</h1>
        <nav>
            <a href="https://facebook.com/podcastless"><fa :icon="['fab', 'facebook']" /></a>
            <a href="https://instagram.com/podcastless"><fa :icon="['fab', 'instagram']" /></a>
            <a href="https://twitter.com/podcastless"><fa :icon="['fab', 'twitter']" /></a>
        </nav>
    </header>
</template>

<style lang="css">
@font-face {
    font-family: 'AndaleMonoMTStd';
    src: url('~assets/fonts/AndaleMonoMTStd-Bold.otf');
}

* {
    margin: 0;
    padding: 0;
}
</style>

<style lang="css" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: white;
    background-color: black;
    font-family: 'AndaleMonoMTStd', monospace;

    height: 100vh;
    width: 100vw;
}

img {
    max-height: 30%;
}

h1 {
    font-size: 2.25em;
    margin-block-start: 1em;
}

nav {
    margin-block-start: 0.95em;
}

nav a {
    font-size: 1.75em;
    color: white;
    text-decoration: none;
}

nav a:not(:last-child) {
    margin-inline-end: 0.3em;
}
</style>
