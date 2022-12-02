export function strippedHtml(string){
    let regex = /(<([^>]+)>)/ig;

    return string.replace(regex, "");
}


/**
 * Return VueJS compiled object
 * @param: shortcode
 * @return: object
 * */
import {compile} from 'vue/dist/vue.esm-bundler';

export const createNode = (shortcode) => () => h(compile(shortcode));


/**
 * replace '_' with '-' in only shortcode tag name
 * @param: shortcode
 * @return: string
 * */
export const parseString = (shortcode) => {
    let i = 0, j = 0;
    const arr = [];
    while(i < shortcode.length){
        const char = shortcode[i];
        if(char === '<'){
            // open tag
            j = i + 1;
            let skip = false;
            for(j; j < shortcode.length; j++){
                if(skip) continue;

                const char = shortcode[j];
                if(char === '>') break;
                if(char === ' '){
                    skip = true;
                    continue;
                }
                // in tag
                if(char === '_'){
                    arr.push(j);
                }
            }
        }
        if(j > i) i = j;
        i++;
    }
    const array = shortcode.split('');
    arr.forEach((val, i) => {
        array[val] = '-';
    });
    return array.join('');
};