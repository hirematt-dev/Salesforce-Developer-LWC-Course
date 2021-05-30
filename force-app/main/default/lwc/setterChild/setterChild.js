import { LightningElement, api } from 'lwc';

export default class SetterChild extends LightningElement {
    item_val
    @api
    get item() {

    }

    set item(data) {
        this.item_val = data.slice(0, 3);
    }
}