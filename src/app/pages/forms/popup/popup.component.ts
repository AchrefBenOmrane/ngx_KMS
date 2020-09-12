import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'ngx-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class  PopupComponent {

  constructor(public dialog: MatDialog) { }



  openDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line: no-console
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'ngx-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogComponent {}
