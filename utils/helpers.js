export function strippedHtml(string){
    let regex = /(<([^>]+)>)/ig;

    return string.replace(regex, "");
}