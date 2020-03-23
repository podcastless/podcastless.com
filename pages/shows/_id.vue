<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    async asyncData (context) {
        const { title, description } =
            await context.$axios.$get(`/api/shows/${context.route.params.id}.json`);

        return { title, description };
    }
}
</script>
