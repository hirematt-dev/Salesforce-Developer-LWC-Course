import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import {getRecord, getRecordCreateDefaults} from 'lightning/uiRecordApi';
import {getPicklistValues, getObjectInfo} from 'lightning/uiObjectInfoApi';
export default class WireAdapter extends LightningElement {
    userId = Id;
    accountRecordType;
    //getRecord allows you to query the database for a single record on any custom object and most standard bojects
    @wire(getRecord, {layoutTypes:"Full", recordId:"$userId"})
    getRecordHandler({data, error}) {
        console.log("getRecord: ",data)
    }

    @wire(getRecordCreateDefaults, {objectApiName : "Lead"})
    getRecordCreateHandler({data, error}) {
        console.log("getRecordCreateDefaults: ",data)
    }

    @wire(getObjectInfo, {objectApiName : "Account"})
    getObjectInfoHandler({data, error}) {
        if(data) {
            this.accountRecordType = data.defaultRecordTypeId
        }
        console.log("getObjectInfo: ",data)
    }    

    @wire(getPicklistValues, {recordTypeId: '$accountRecordType', fieldApiName : "Account.Industry"})
    getPicklistValuesHandler({data, error}) {
        console.log("getPicklistValues: ",data)
    }
}