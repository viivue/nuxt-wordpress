export default defineEventHandler((event) => {
    const apiLink = `/acf/v3/options/options`;

    return $fetch(apiLink);
});