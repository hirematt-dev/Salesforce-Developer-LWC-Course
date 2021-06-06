import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    shouldRender=true
    toggle(){
        this.shouldRender = !this.shouldRender;
    }
    errorCallback(error, stack){
        console.log('errorCallback');
    }
}