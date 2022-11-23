export default defineEventHandler((event) => {
    const {id, slug, post_type} = getQuery(event);

    let apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/posts?_embed`;

    if (id) {
        apiLink = `https://vinzan.mochisandbox.com/eevee/eevee/v1/post/id=${id}`;
    }
    if (slug) {
        const _post_type = post_type ? post_type : 'page';

        apiLink = `https://vinzan.mochisandbox.com/eevee/eevee/v1/post/path=${slug}/post_type=${_post_type}`;
    }

    return $fetch(apiLink);
});