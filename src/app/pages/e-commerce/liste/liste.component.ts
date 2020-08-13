import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {list} from '../../../@core/mock/listClass';
import { SmartTableService} from '../../../@core/mock/smart-table.service';

@Component({
  selector: 'ngx-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
    table : list[]=new Array<list>();
    error:'';
    constructor(
      private listeService : SmartTableService
    ){}
ngOnInit(){
  this.getName();
}
    getName(){
      this.listeService.getData().subscribe(
        res=>{
          this.table= res as list[];
          console.log(res);
          

        },
        err=>{this.error=err;
        console.log(err);
        }
      )
    }
  }
