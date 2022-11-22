export default defineEventHandler((event) => {
    return $fetch(`https://vinzan.mochisandbox.com/eevee/eevee/v1/info`);
});