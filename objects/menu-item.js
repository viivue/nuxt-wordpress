import {getURL} from "~/includes/helpers";

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