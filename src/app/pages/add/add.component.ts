import { HttpClient } from '@angular/common/http';
import {list} from '../../@core/mock/listClass';
import {SmartTableService} from '../../@core/mock/smart-table.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  

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








































// onSubmit(data){
//   this.ser.create(data).subscribe(
//          (response) => console.warn(response))
//         }

// form: FormGroup;


//   constructor(public fb: FormBuilder ,  public services: SmartTableService) {
//     this.form = this.fb.group({
//       name: [''],
//       avatar: [null]
//     })
//   }

//   ngOnInit() { }

//   // uploadFile(event) {
//   //   const file = (event.target as HTMLInputElement).files[0];
//   //   this.form.patchValue({
//   //     avatar: file
//   //   });
//   //   this.form.get('avatar').updateValueAndValidity()
//   // }
//   submitForm(list:list) {
//     var formData: any = new FormData();
//     formData.append("Rid", this.form.get('Rid').value);
//     formData.append("Retat", this.form.get('Retat').value);
//     formData.append("Rdate", this.form.get('Rdate').value);
  
//     // formData.append("avatar", this.form.get('avatar').value);
  
//     this.services.create(formData).subscribe(
//       (response) => console.log(response),
//       (error) => console.log(error)
//     )
//   }

