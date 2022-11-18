export default defineEventHandler((event) => {
    return $fetch(`https://dev.mochisandbox.com/wordpress-vue/wp-json/custom/site-info`);
});