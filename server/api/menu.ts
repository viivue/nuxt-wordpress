export default defineEventHandler((event) => {
    const {location} = getQuery(event);
    const apiLink = `https://vinzan.mochisandbox.com/eevee/eevee/v1/menu/location=${location}`;

    return $fetch(apiLink);
})
