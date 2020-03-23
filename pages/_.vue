<template>
    <main>
        <img src="~/assets/img/404-not-found.svg" alt="Not found">
        <h1>page not found</h1>
    </main>
</template>

<style scoped>
main {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 15em);
}

img {
    height: 80%;
    max-height: 300px;

    margin-block-end: 2em;
}
</style>
