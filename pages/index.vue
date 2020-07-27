<template>
    <header>
        <img src="~/assets/img/logo.svg" alt="Podcastless">
        <h1>listen now</h1>
        <nav>
            <a target="_blank" href="https://open.spotify.com/show/6bDc9AITyuorgerahi0J4N?si=BkXZEXfHRoeU927n4wxYFA"><fa :icon="['fab', 'spotify']" /></a>
            <a target="_blank" href="https://www.deezer.com/en/show/1448882"><fa :icon="['fab', 'deezer']" /></a>
            <a target="_blank" href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDQ0Nzc2Mi9lcGlzb2Rlcy9mZWVk"><fa :icon="['fab', 'google']" /></a>
            <a target="_blank" href="https://podcasts.apple.com/co/podcast/podcastless/id1517750043"><fa :icon="['fab', 'itunes-note']" /></a>
        </nav>
        <h2 class="contact">contact us</h2>
        <nav>
            <a target="_blank" href="https://facebook.com/podcastless"><fa :icon="['fab', 'facebook']" /></a>
            <a target="_blank" href="https://instagram.com/podcastless"><fa :icon="['fab', 'instagram']" /></a>
            <a target="_blank" href="https://twitter.com/podcastless"><fa :icon="['fab', 'twitter']" /></a>
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

h1, h2 {
    margin-block-start: 1em;
}

h1 {
    font-size: 2.25em;
}

h2 {
    font-size: 1.55em;
}

h2.contact {
    margin-block-start: 2em;
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
