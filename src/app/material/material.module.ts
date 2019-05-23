import { NgModule } from '@angular/core';
import {MatButtonModule, MatSortModule } from '@angular/material';


const MaterialComponents=[
  MatButtonModule,
  MatSortModule
]
@NgModule({
 
  imports: [
    
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
