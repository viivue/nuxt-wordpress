export default defineEventHandler((event) => {
    const apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/custom/menu/location=main-menu`;

    return $fetch(apiLink);
})
