import { Routes } from '@angular/router';
import { ArvutamineComponent } from './arvutamine/arvutamine.component';
import { ChangeLocationComponent } from './change-location/change-location.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { InputToggleComponent } from './input-toggle/input-toggle.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
    { path: "arvutamine", component: ArvutamineComponent},
    { path: "paroolikast", component: InputToggleComponent},
    { path: "asukoht", component: ChangeLocationComponent},
    { path: "nimekiri", component: DynamicListComponent},
    { path: "sisselogimine", component: LoginFormComponent}
];
