export default defineEventHandler((event) => {
    const {id, slug} = getQuery(event);

    let apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/posts?_embed`;

    if (id) {
        apiLink = `https://vinzan.mochisandbox.com/eevee/eevee/v1/post/id=${id}`;
    }
    if (slug) {
        apiLink = `https://vinzan.mochisandbox.com/eevee/eevee/v1/post/slug=${slug}`;
    }

    return $fetch(apiLink);
});