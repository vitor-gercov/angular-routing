import { Routes } from "@angular/router";
import { AddUserComponent, EditUserComponent, UserProfileComponent } from "./pages";
import { UsersComponent } from "./users.component";

export const usersRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
    },
    {
        path: 'new',
        component: AddUserComponent
    },
    {
        path: ':id',
        component: UserProfileComponent,
        children: [
            {
                path: 'edit',
                component: EditUserComponent
            }
        ]
    }
]