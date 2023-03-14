import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: function () {
      return import('./modules/home/home.module').then(function (module) {
        return module.HomeModule
      })
    }
  },
  {
    path: 'users',
    loadChildren: function () {
      return import('./modules/user/users.module').then(function (module) {
        return module.UsersModule
      })
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
