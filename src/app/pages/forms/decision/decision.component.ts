import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';
@Component({
  selector: 'ngx-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.scss'],
})
export class DecisionComponent  {

  constructor() { }
  editField: string;
  personList: Array<any> = [
    { id: 1, name: 'Au', age: 30, companyName: 'Dee', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Gue', age: 45, companyName: 'Insectus', country: 'USA', city: 'San ' },
    // tslint:disable-next-line: max-line-length
    { id: 3, name: ' House', age: 26, companyName: 'nic', country: 'Germany', city: ' am Main' },
    { id: 4, name: ' Vega', age: 30, companyName: 'lkl', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'er', age: 31, companyName: 'Portica', country: ' Kingdom', city: 'London' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'l', country: 'Russia', city: 'w' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'ing', country: 'USA', city: 'go' },
    { id: 9, name: 'ia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'Jcz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}


