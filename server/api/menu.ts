export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig();

    const {location} = getQuery(event);

    return $fetch(`${runtimeConfig.apiURL}/menu/location=${location}`);
});