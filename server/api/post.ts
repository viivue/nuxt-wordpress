export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig();
    const {id, slug} = getQuery(event);

    if (id) {
        return $fetch(`${runtimeConfig.apiURL}/post/id=${id}`);
    }

    if (slug) {
        return $fetch(`${runtimeConfig.apiURL}/post/slug=${slug}`);
    }
});