import { Routes } from "@angular/router";
import { GuardsComponent } from "./guards.component";
import { CanActivateChildComponent } from "./pages/can-activate-child/can-activate-child.component";
import { CanActivateComponent } from "./pages/can-activate/can-activate.component";
import { CanDeactivateComponent } from "./pages/can-deactivate/can-deactivate.component";

export const guardRoutes: Routes = [
    {
        path: '',
        component: GuardsComponent
    },
    {
        path: 'canActivate',
        component: CanActivateComponent,
    },
    {
        path: 'canActivateChild',
        component: CanActivateChildComponent,
        children: [
            {
                path: 'protected-child'
            }
        ]
    },
    {
        path: 'canDeactivate',
        component: CanDeactivateComponent,
    },
]