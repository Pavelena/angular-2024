import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegionsComponent } from './regions/regions.component';

export const routes: Routes = [
    { path: "", component: RegionsComponent},
    { path: "products", component: ProductsComponent}
];
