export default defineEventHandler((event) => {
    const runtimeConfig = useRuntimeConfig();

    return $fetch(`${runtimeConfig.apiURL}/info`);
});