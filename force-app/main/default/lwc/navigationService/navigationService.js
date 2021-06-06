import { LightningElement, wire } from 'lwc';
import {NavigationMixin, CurrentPageReference} from 'lightning/navigation';
export default class NavigationService extends NavigationMixin(LightningElement) {
    // NavigationMixin.Navigate directs to page upon click of button
    goToWebpage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact', 
                actionName: 'new'
            }
        })
    }
    //NavigationMixin.GenerateUrl generates a url to the specified location during component mounting phase when the renderedCallback is invoked
    renderedCallback(){
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact', 
                actionName: 'new'
            }
        }).then(url => {
            this.recordPageUrl = url
        })
    }
    recordPageUrl

    // Using Wire on the CurrentPageReference adapter returns a reference to the current page
    @wire(CurrentPageReference)
    thisPage

    get thisPageReference(){
        return this.thisPage ? JSON.stringify(this.thisPage, null, 2):''
    }


}