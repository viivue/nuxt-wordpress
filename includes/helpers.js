import {useRuntimeConfig} from "nuxt/app";

export function getURL(url, prefix = window.location.origin){
    const runtimeConfig = useRuntimeConfig();
    return url.replace(runtimeConfig.public.apiBase, prefix)
}