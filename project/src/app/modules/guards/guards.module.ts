import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardsComponent } from './guards.component';
import { CanActivateComponent } from './pages/can-activate/can-activate.component';
import { CanActivateChildComponent } from './pages/can-activate-child/can-activate-child.component';
import { CanDeactivateComponent } from './pages/can-deactivate/can-deactivate.component';



@NgModule({
  declarations: [
    GuardsComponent,
    CanActivateComponent,
    CanActivateChildComponent,
    CanDeactivateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuardsModule { }
