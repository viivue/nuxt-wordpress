import {useFetch, useRuntimeConfig} from "nuxt/app";
import {defineStore} from 'pinia';

const runtimeConfig = useRuntimeConfig();

export const usePostsStore = defineStore({
    id: 'post-store',
    actions: {
        fetchPosts(){
            return useFetch(`${runtimeConfig.public.api}/posts?_embed`);
        },
        fetchSinglePost(id){
            return useFetch(`${runtimeConfig.public.api}/posts/${id}/?_embed`);
        }
    }
});