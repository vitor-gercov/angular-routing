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
    path: 'basic-child',
    loadChildren: function () {
      return import('./modules/basic-child/basic-child.module').then(module => module.BasicChildModule)
    }
  },
  {
    path: 'nested-routes',
    loadChildren: function () {
      return import('./modules/nested-routes/nested-routes.module').then(module => module.NestedRoutesModule)
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
