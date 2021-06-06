import { LightningElement } from 'lwc';
import htmltemplate from './htmltemplate.html';
import lifecycleMethods from './lifecycleMethods.html';

export default class LifecycleMethods extends LightningElement {
    //mounting phase
    constructor(){
        super();
        console.log('Constructor');
    }
    connectedCallback(){
        console.log('connectedCallback');
    }
    renderedCallback(){
        console.log('renderedCallback')
        if(this.error) {
            throw 'this is an error';
        }
    }
    //unmounting phase
    disconnectedCallback(){
        console.log('disconnectedCallback');
    }




    renderDefault = false;
    error = false
    render(){
        return this.renderDefault ? htmltemplate : lifecycleMethods
    }
    handleClick(){
        this.renderDefault = !this.renderDefault;
    }
    causeError(){
        this.error = true;
    }
}