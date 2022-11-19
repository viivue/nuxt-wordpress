export default defineEventHandler((event) => {
    const {location} = getQuery(event);
    const apiLink = `https://dev.mochisandbox.com/wordpress-vue/wp-json/custom/menu/location=${location}`;

    return $fetch(apiLink);
})
