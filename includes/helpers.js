import {useRuntimeConfig} from "nuxt/app";

export function getURL(url){
    const runtimeConfig = useRuntimeConfig();
    return url.replace(runtimeConfig.public.apiBase, window.location.origin)
}