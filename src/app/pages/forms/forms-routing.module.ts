import { IConstatComponent } from './iConstat/iConstat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DecisionComponent } from './decision/decision.component';
import { DialogComponent } from './popup/popup.component';
import { PopupComponent } from './popup/popup.component';
import { ActionComponent } from './action/action.component';
import { DesActionComponent } from './desAction/desAction.component';
import { ModifReuComponent } from './modifReu/modifReu.component';
// tslint:disable-next-line: import-spacing

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'modifReu',
        component:  ModifReuComponent,
        
      },
      {
        path: 'layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'constat',
        component: IConstatComponent,
      },
      {
        path: 'decision',
        component:  DecisionComponent,

      },
      {
        path: 'popup',
        component: PopupComponent,
      },
      {
        path: 'desAction',
        component: DesActionComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'action',
        component: ActionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

