<template>
    <footer>
        Footer Here!
    </footer>
</template>

<style scoped>
footer {
    display: grid;
    grid-template-columns: repeat(auto, 3);
    grid-template-areas: "left center right";
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
