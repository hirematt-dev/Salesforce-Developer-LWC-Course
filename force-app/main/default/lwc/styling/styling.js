import { LightningElement } from 'lwc';

export default class Styling extends LightningElement {
    buttonStyled=false
    renderedCallback() {
        if(!this.buttonStyled) {
            let style = document.createElement('style');
            let button = this.template.querySelector('lightning-button');
            style.innerText = `
            .slds-button:hover{
                background-color:black;
                color:white;
            }`
            button.appendChild(style);
            this.buttonStyled= true;    
        }
    }

    handleClick(){
        console.log(this.template.querySelector('c-child-component').publicMethod());
    }

    handleChildEvent(event){
        console.log(event.detail);
    }
}