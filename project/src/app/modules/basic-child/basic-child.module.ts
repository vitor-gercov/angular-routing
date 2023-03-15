import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicChildComponent } from './basic-child.component';
import { RouterModule } from '@angular/router';
import { basicChildRoutes } from './basic-child.routes';



@NgModule({
  declarations: [
    BasicChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(basicChildRoutes)
  ]
})
export class BasicChildModule { }
