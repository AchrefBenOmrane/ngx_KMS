import { NgModule } from '@angular/core';
// import {MaterialModule} from '../../material/material.module'
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';  

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';

import { ChartModule } from 'angular2-chartjs';




import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { ListeComponent } from './liste/liste.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';

// import {NbAccordionItemBodyModule} from 'nb-accordion-item-body';
// import {NbAccordionItemHeaderModule} from 'nb-accordion-item-header';
// import { NbAccordionItemModule} from 'nb-accordion-item';

import { GererComponent } from './gerer/gerer.component';
import {  NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { FsIconComponent } from './gerer/gerer.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {ExpansionComponent} from './expansion/expansion.Component'

import { MaterialTableComponent } from './material-table/material-table.component'

import {MatExpansionModule} from '@angular/material/expansion';

// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InvitationsComponent } from './invitations/invitations.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    // MaterialModule,
    // BrowserModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbTreeGridModule,
    NbInputModule,
    ThemeModule,
    NbAccordionModule,
    MatExpansionModule,
    MatFormFieldModule,
    // BrowserAnimationsModule,
    MatToolbarModule,
    


   
    
    
  ],
  declarations: [
    ECommerceComponent,
   
    ListeComponent,
    GererComponent,
    FsIconComponent,
    TreeGridComponent,
    // ExpansionComponent,
  
    
    MaterialTableComponent,
    InvitationsComponent
   
  ],
  providers: [
    
  ],
})
export class ECommerceModule { }
