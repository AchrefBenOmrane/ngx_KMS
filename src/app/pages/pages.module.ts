import { NgModule } from '@angular/core';
import { NbMenuModule, NbIconLibraries } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'; 
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    AddComponent,
  ],
})
export class PagesModule {
  constructor(iconsLibrary: NbIconLibraries) { 
    iconsLibrary.registerSvgPack('myicon', { 'add': '<img src="../../assets/icon/plus.png" width="20px" height="20px" >',}); 
    iconsLibrary.registerSvgPack('icon', { 'edit': '<img src="../../assets/icon/edit.png" width="20px" height="20px" >',}); 
    iconsLibrary.registerSvgPack('filtrer', { 'filtrer': '<img src="../../assets/icon/filter.png" width="20px" height="20px" >',}); 
    iconsLibrary.registerSvgPack('config', { 'config': '<img src="../../assets/icon/settings.png" width="20px" height="20px" >',});
    iconsLibrary.registerSvgPack('delete', { 'delete': '<img src="../../assets/icon/delete.png" width="20px" height="20px" >',});
    iconsLibrary.registerSvgPack('repeat', { 'repeat': '<img src="../../assets/icon/repeat(1).png" width="20px" height="20px" >',}); 
    }
  }

