export default defineEventHandler((event) => {
    const {id} = getQuery(event);
    const apiLink = `https://vinzan.mochisandbox.com/eevee/eevee/v1/post/id=${id}`;

    return $fetch(apiLink);
});