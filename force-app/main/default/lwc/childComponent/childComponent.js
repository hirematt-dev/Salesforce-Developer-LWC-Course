import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    child_property = "hello my name is Matthew"
    @api publicMethod() {
        return this.child_property;
    }
    
    child_data = "this is some child data"

    handleClick(){
        const buttonClicked = new CustomEvent('buttonclicked', {detail: this.child_data})
        this.dispatchEvent(buttonClicked);
    }
}