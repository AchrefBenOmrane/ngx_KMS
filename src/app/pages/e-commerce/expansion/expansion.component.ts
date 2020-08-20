import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss'],
})
export class ExpansionComponent {
  panelOpenState = false;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  // constructor() { }

  // ngOnInit() { }

}


