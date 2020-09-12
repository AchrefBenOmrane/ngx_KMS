import {list} from '../../../@core/mock/listClass';
import {SmartTableService} from '../../../@core/mock/smart-table.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {
  radioGroupValue='';
  radioGroupValuee='';
  customer: list = new list();
  submitted = false;
  constructor(public ser:SmartTableService){}

  newCustomer(): void {
    this.submitted = false;
    this.customer = new list();
  }
 
  save() {
    this.ser.create(this.customer)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.customer = new list();
  }
 
  onSubmit() {
    this.save();
  }

}