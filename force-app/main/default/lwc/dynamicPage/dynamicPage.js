import { LightningElement, track } from 'lwc';

export default class DynamicPage extends LightningElement {
    // track to a property changes using @track
    @track item = {
        name:"John"
    }
    changeHandler(event){
        this.item.name = event.target.value
    }
    // DOM manipulation within shadow dom

    handleClick() {
        let h1 = document.querySelector('h1').innerText
        console.log(h1)
    }
}