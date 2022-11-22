import {useRuntimeConfig} from "nuxt/app";

export function getURL(url, prefix = window.location.origin){
    const runtimeConfig = useRuntimeConfig();
    return url.replace(runtimeConfig.public.apiBase, prefix)
}

export function strippedHtml(string){
    let regex = /(<([^>]+)>)/ig;

    return string.replace(regex, "");
}

export function getPostTypeFromSlugArray(slugArray){
    const type = 'page';
    const siteInfo = useState("siteInfo");
    const postTypes = siteInfo.value['post_types']['types'];
    const taxonomies = siteInfo.value['post_types']['taxes'];
    const terms = siteInfo.value['post_types']['terms'];

    let isPostType = postTypes.includes(slugArray[0]);
    let isTax = taxonomies.includes(slugArray[0]);
    let isTerm = terms.includes(slugArray[0]);
    let isPost = slugArray[0] === siteInfo.value.posts_page_slug;


    if(isPost) return siteInfo.value.posts_page_slug;
    if(isPostType) return slugArray[0];
    if(isTax) return slugArray[0];

    //console.log(slugArray.length, isPostType, isTax)

    return 'page';
}