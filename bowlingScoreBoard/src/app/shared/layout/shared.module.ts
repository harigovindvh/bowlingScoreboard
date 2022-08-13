import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CommonLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class sharedModule { }
