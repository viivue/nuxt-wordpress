export default defineEventHandler((event) => {
    const {id, slug} = getQuery(event);

    let apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/pages?_embed`;

    if (id) {
        apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/pages/${id}?_embed`;
    }
    if (slug) {
        apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/pages/?slug=${slug}`;
    }

    return $fetch(apiLink);
});