import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KinkekaartComponent } from './kinkekaart/kinkekaart.component'; 
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component'; 
import { SeadedComponent } from './seaded/seaded.component';

export const routes: Routes = [
    {path: "", component: AvalehtComponent},
    {path: "kinkekaart", component: KinkekaartComponent},
    {path: "lisa-toode", component: LisaToodeComponent},
    {path: "ostukorv", component: OstukorvComponent},
    {path: "seaded", component: SeadedComponent},
];
