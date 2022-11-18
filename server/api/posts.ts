export default defineEventHandler((event) => {
    const query = getQuery(event);

    let apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/posts?_embed`;

    if (query.id) {
        apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/posts/${query.id}?_embed`;
    }

    return $fetch(apiLink);
});