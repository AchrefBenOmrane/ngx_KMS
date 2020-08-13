import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartTableService } from './smart-table.service';

// import { ListClassComponent } from './list-class/list-class.component';

const SERVICES = [
  
  SmartTableService,

];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
  declarations: [],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
