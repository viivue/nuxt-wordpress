export default defineEventHandler((event) => {
    const {id} = getQuery(event);
    const apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/custom/post/id=${id}`;

    return $fetch(apiLink);
})
