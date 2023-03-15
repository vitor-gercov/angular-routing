import { Routes } from "@angular/router";
import { NestedRoutesComponent } from "./nested-routes.component";
import { AnotherNestedComponent, OneNestedComponent } from "./pages";

export const nestedRoutesRoutes: Routes = [
    {
        path: '',
        component: NestedRoutesComponent,
        children: [
            {
                path: '',
                redirectTo: 'one',
                pathMatch: 'full'
            },
            {
                path: 'one',
                component: OneNestedComponent
            },
            {
                path: 'another',
                component: AnotherNestedComponent
            }
        ]
    }
]