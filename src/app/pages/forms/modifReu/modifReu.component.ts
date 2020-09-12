import { Component, OnInit } from '@angular/core';
import {list} from '../../../@core/mock/listClass';
import {SmartTableService} from '../../../@core/mock/smart-table.service';

@Component({
  selector: 'ngx-modifReu',
  templateUrl: './modifReu.component.html',
  styleUrls: ['./modifReu.component.scss'],
})
export class ModifReuComponent  {

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