import {getURL} from "~/utils/helpers";

export class MenuItem{
    constructor(config){
        const data = {
            ID: '',
            title: '',
            url: '',
            ...config
        };

        this.ID = data.ID;
        this.title = data.title;
        this.url = getURL(data.url, '');
    }
}