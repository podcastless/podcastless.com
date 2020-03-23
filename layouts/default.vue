<script>
import AppHeader from '../components/header';
import AppFooter from '../components/footer';

export default {
    components: {
        AppHeader,
        AppFooter
    },
    functional: true,
    render (createElement) {
        return [
            createElement(AppHeader),
            createElement('nuxt'),
            createElement(AppFooter)
        ];
    }
}
</script>

<style>
@font-face {
    font-family: 'AndaleMonoMTStd';
    font-weight: 600;
    src: url('~assets/fonts/AndaleMonoMTStd-Bold.otf');
}

* {
    margin: 0;
    padding: 0;
}

body {
    background-color: black;
    color: white;
    font-family: 'AndaleMonoMTStd', monospace;
}

#__layout {
    display: grid;

    grid-template: 7em auto 7em / auto 2fr;

    grid-template-areas:
        "header header header"
        "aside main main"
        "footer footer footer";
    row-gap: 0.5em;

    width: 100%;
    margin-top: 1em;
}

header, main, footer {
    align-self: center;
    justify-self: center;
}

header {
    grid-area: header;
}

main {
    grid-area: main;
}

aside {
    grid-area: aside;
}

footer {
    grid-area: footer;
}
</style>
