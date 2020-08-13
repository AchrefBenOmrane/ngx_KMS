import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SmartTableService} from '../../../@core/mock/smart-table.service';
import {list} from '../../../@core/mock/listClass';

// export interface PeriodicElement {
//     name: string;
//     position: number;
//     weight: number;
//     symbol: string;
//   }
  
//   const ELEMENT_DATA: PeriodicElement[] = [
//     {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//     {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//     {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//     {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//     {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//     {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//     {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//     {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//     {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//     {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   ];
@Component({
  selector: 'ngx-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
/**
 * @title Data table with sorting, pagination, and filtering.
 */

export class MaterialTableComponent implements OnInit{
    displayedColumns: string[] = ['position', 'id', 'etat', 'date'];
    listData: MatTableDataSource<any>;

    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    dataSource=[];
    // @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
    // @ViewChild(MatSort, {static:false}) sort: MatSort;
    @ViewChild(MatPaginator ,{}) paginator: MatPaginator;
    @ViewChild(MatSort ,{}) sort: MatSort;


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

    
    // ngOnInit() {
    //     this.dataSource.sort = this.sort;
    //   }
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
          this.dataSource= res as list[];
          console.log(res);
          

        },
        err=>{this.error=err;
        console.log(err);
        }
      )
    }
    
  }
