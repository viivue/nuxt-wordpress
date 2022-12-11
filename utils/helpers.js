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

export const createNode = (shortcode) => {
    console.log(shortcode)
    return h(compile(shortcode));
}


/**
 * Compare string: Valid open/close tag
 * @param: first, second
 * @return: boolean
 * */
const compareTwoTag = (first, second) => {
    return first.replace('[', '').replace(']', '').replace('/', '') === second.replace('[', '').replace(']', '').replace('/', '');
};


/**
 * Replace string in range
 * @param: replaceFrom, replaceTo, startPosition, endPosition
 * @return: string
 * */
String.prototype.replaceString = function(replaceFrom, replaceTo, startPosition, endPosition){
    return this.slice(0, startPosition) + this.slice(startPosition, endPosition).replaceAll(replaceFrom, replaceTo) + this.slice(endPosition);
};


/**
 * replace '_' with '-' in only shortcode tag name
 * @param: shortcode
 * @return: string
 * */
export const parseString = (shortcode) => {
    const stack = [];
    let currentTag = '';
    let i = 0, j = 0, isConflict = false;
    const domNode = [];

    while(i < shortcode.length){
        const char = shortcode[i];
        let isFalse = false;
        if(char === '['){
            let skip = false, openTag = i, endTag = i;
            currentTag += char;
            j = i + 1;
            for(j; j < shortcode.length; j++){
                const char = shortcode[j];
                if(char === ' '){
                    skip = true;
                    continue;
                }
                if(char === ']'){
                    currentTag += ']';
                    endTag = j;
                    break;
                }
                if(char === '['){
                    isFalse = true;
                    j--;
                    break;
                }
                if(!skip){
                    currentTag += char;
                }
            }

            if(isFalse){
                i++;
                continue;
            }

            i = j;
            if(!currentTag.includes('/')){
                stack.push({
                    openTag: currentTag,
                    position: {
                        open: openTag,
                        end: endTag
                    }
                });
            }

            // Close tag
            if(stack.length > 0 && currentTag.includes('/')){
                const topStack = stack.slice(-1)[0];
                const topStackTag = topStack.openTag;

                if(compareTwoTag(topStackTag, currentTag)){
                    // top stack = voi current tag => Valid Tag
                    stack.pop();
                    domNode.push({
                        openTag: topStack.openTag,
                        endTag: currentTag,
                        position: {
                            open: topStack.position,
                            close: openTag
                        },
                    });
                }else{
                    // top stack !== current tag

                    // check xem stack co tag nao = voi current tag ko
                    const hasTag = stack.find(s => compareTwoTag(s.openTag, currentTag));
                    if(hasTag){
                        const index = stack.findIndex(s => compareTwoTag(s.openTag, currentTag));
                        stack.splice(index + 1);
                        domNode.push({
                            openTag: hasTag.openTag,
                            endTag: currentTag,
                            position: {
                                open: hasTag.position,
                                close: openTag
                            },
                        });
                    }else{
                    }
                }
            }
            currentTag = '';
            continue;
        }
        i++;
    }
    console.log(domNode, isConflict, stack);
    return domNode.reduce((acc, cur) => {
        const openP = cur.position.open;
        const closeP = cur.position.close;
        return acc.replaceString('_', '-', openP.open, openP.end)
            .replaceString('[', '<', openP.open, openP.end)
            .replaceString(']', '>', openP.open, openP.end + 1)
            .replaceString('_', '-', closeP, closeP + cur.endTag.length)
            .replaceString('[', '<', closeP, closeP + cur.endTag.length)
            .replaceString(']', '>', closeP, closeP + cur.endTag.length);

    }, shortcode);
};