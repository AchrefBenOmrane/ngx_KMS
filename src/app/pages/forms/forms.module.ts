
import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTabsetModule,
  NbRouteTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { PopupComponent } from './popup/popup.component';
import { DialogComponent } from './popup/popup.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatDialogModule} from '@angular/material/dialog';
import { IConstatComponent } from './iConstat/iConstat.component';
import { DecisionComponent } from './decision/decision.component';
import { ActionComponent } from './action/action.component';
import {MatButtonModule} from '@angular/material/button';
import { DesActionComponent } from './desAction/desAction.component';
import { ModifReuComponent } from './modifReu/modifReu.component';
// tslint:disable-next-line: import-spacing
import{ PointAdiscuterComponent } from'./pointAdiscuter/pointAdiscuter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbRouteTabsetModule,
    ngFormsModule,
    MatDialogModule,
 NgbModule,


  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    IConstatComponent,
    PopupComponent,
    DialogComponent,
    DecisionComponent,
    ActionComponent,
    DesActionComponent,
    ModifReuComponent,
    PointAdiscuterComponent,
  ],
})
export class FormsModule { }
