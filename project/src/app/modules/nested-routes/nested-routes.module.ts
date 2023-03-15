import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedRoutesComponent } from './nested-routes.component';
import { OneNestedComponent, AnotherNestedComponent } from './pages';
import { RouterModule } from '@angular/router';
import { nestedRoutesRoutes } from './nested-routes.routes';


@NgModule({
  declarations: [
    NestedRoutesComponent,
    OneNestedComponent,
    AnotherNestedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(nestedRoutesRoutes)
  ]
})
export class NestedRoutesModule { }
