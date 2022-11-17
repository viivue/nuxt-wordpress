import {useFetch, useRuntimeConfig} from "nuxt/app";
import {defineStore} from 'pinia';

export const usePostsStore = defineStore({
    id: 'post-store',
    // state: () => ({
    //     posts: []
    // }),
    actions: {
        fetchPosts(){
            return useFetch(`${useRuntimeConfig().public.api}/posts?_embed`);
        }
    }
});