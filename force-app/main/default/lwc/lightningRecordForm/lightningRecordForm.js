import { LightningElement } from 'lwc';

import LEAD_OBJECT from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import  COMPANY_FIELD from '@salesforce/schema/Lead.Company';

export default class LightningRecordForm extends LightningElement {

    recordId = "00Q5Y000023qsxfUAA"
    objectName = LEAD_OBJECT;
    fieldList = [NAME_FIELD, PHONE_FIELD, COMPANY_FIELD]

    successHandler(e){
        console.log(e)
    }
    clearFields(){
        this.template.querySelector('lightning-record-edit-form').querySelectorAll('lightning-input-field').forEach((input)=>{
            input.reset();
        })
    }
}