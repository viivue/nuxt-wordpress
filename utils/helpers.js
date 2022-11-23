export function strippedHtml(string){
    let regex = /(<([^>]+)>)/ig;

    return string.replace(regex, "");
}


/**
 * Get post type from slug array
 * @param slugs
 * @returns {string|*}
 */
export function getPostTypeFromSlugArray(slugs){
    const slugArray = [...slugs];
    const siteInfo = useState("siteInfo");
    const postTypes = siteInfo.value['post_types']['types'];
    const taxonomies = siteInfo.value['post_types']['taxes'];
    const terms = siteInfo.value['post_types']['terms'];

    // CPT page
    const isPostType = postTypes.includes(slugArray[0]);
    if(isPostType) return slugArray[0];

    // posts page
    const isPost = slugArray[0] === siteInfo.value.posts_page_slug;
    if(isPost) return siteInfo.value.posts_page_slug;

    // taxonomy page
    const isTax = taxonomies.includes(slugArray[0]);
    if(isTax) return slugArray[0];

    //let isTerm = terms.includes(slugArray[0]);

    //console.log(slugArray.length, isPostType, isTax)

    return 'page';
}


/**
 * Get path value from slug array
 * => a,b,c
 * @param slugs
 * @returns {string}
 */
export function getPathValueFromSlugArray(slugs){
    let type = '';
    const slugArray = [...slugs];
    const siteInfo = useState("siteInfo");
    const postTypes = siteInfo.value['post_types']['types'];

    // CPT page
    const isPostType = postTypes.includes(slugArray[0]);
    if(isPostType) type = 'cpt';

    // posts page
    const isPost = slugArray[0] === siteInfo.value.posts_page_slug;
    if(isPost) type = 'page_for_posts';

    switch(type){
        case "cpt":
        case "page_for_posts":
            slugArray.shift();
            break;
        default:
    }

    return slugArray.join(',');
}