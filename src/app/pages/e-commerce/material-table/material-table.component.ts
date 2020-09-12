import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SmartTableService} from '../../../@core/mock/smart-table.service';
import {list} from '../../../@core/mock/listClass';
import jsPDF from 'jspdf';
// import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'ngx-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
/**
 * @title Data table with sorting, pagination, and filtering.
 */

export class MaterialTableComponent implements OnInit{
  @ViewChild('htmlData') htmlData:ElementRef;
    displayedColumns: string[] = ['No.', 'titre', 'date', 'heure','date_r','type','date_c','createur'];
    listData: MatTableDataSource<any>;
    

    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    // dataSource=[];
    dataSource: MatTableDataSource <list>;
    // @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
    // @ViewChild(MatSort, {static:false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort ) sort: MatSort;


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
  this.dataSource = new MatTableDataSource(this.table);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

}
    getName(){
      this.listeService.getData().subscribe(
        res=>{
          this.dataSource = res ;
          console.log(res);
          

        },
        err=>{this.error=err;
        console.log(err);
        }
        
      )
    }
    data = [
      [1, 'Finland', 7.632, 'Helsinki'],
      [2, 'Norway', 7.594, 'Oslo'],
      [3, 'Denmark', 7.555, 'Copenhagen'],
      [4, 'Iceland', 7.495, 'Reykjavík'],
      [5, 'Switzerland', 7.487, 'Bern'],
      [9, 'Sweden', 7.314, 'Stockholm'],
      [73, 'Belarus', 5.483, 'Minsk'],
    ]
    head = [['No.', 'ID', 'Etat', 'Date']]

    createPdf() {
      var doc = new jsPDF();
      
  
      doc.setFontSize(18);
      doc.text('My PDF Table', 11, 8);
      doc.setFontSize(11);
      doc.setTextColor(100);
  
  
      (doc as any).autoTable({
        head: this.head ,
        body: this.data,
        theme: 'plain',
        didDrawCell: data => {
          console.log(data.column.index)
        }
      })
  
      // Open PDF document in new tab
      doc.output('dataurlnewwindow')
  
      // Download PDF document  
      doc.save('table.pdf');
    }


    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }




    fileName= 'ExcelSheet.xlsx';  

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
  
  
  }

  //   public openPDF():void {
  //     let DATA = this.htmlData.nativeElement;
  //     let doc = new jsPDF('p','pt', 'a4');
  //     doc.fromHTML(DATA.innerHTML,15,15);
  //     doc.output('dataurlnewwindow');
  //   }
  
  
  //   public downloadPDF():void {
  //     let DATA = this.htmlData.nativeElement; 
  //     let doc = new jsPDF('p','pt', 'a4');
  
  //     let handleElement = {
  //       '#editor':function(element,renderer){
  //         return true;
  //       }
  //     };
  //     doc.fromHTML(DATA.innerHTML,15,15,{
  //       'width': 200,
  //       'elementHandlers': handleElement
  //     });
  
  //     doc.save('angular-demo.pdf');
  //   }
    
  // }
