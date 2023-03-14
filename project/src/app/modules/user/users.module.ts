import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { AddUserComponent, EditUserComponent, UserProfileComponent } from "./pages";

import { usersRoutes } from './users.routes';



@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent,
    AddUserComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ]
})
export class UsersModule { }
