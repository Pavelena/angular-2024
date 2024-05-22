import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HaldaTegelasiComponent } from './halda-tegelasi/halda-tegelasi.component';
import { MuudaTegelaneComponent } from './muuda-tegelane/muuda-tegelane.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NumbridComponent } from './numbrid/numbrid.component';
import { YksTegelaneComponent } from './yks-tegelane/yks-tegelane.component';

export const routes: Routes = [
    { path: "", component: CharactersComponent},
    { path: "halda-tegelasi", component: HaldaTegelasiComponent},
    { path: "favourites", component: FavouritesComponent},
    { path: "books", component:BooksComponent},
    { path: "numbers", component: NumbridComponent},
    { path: "tegelane/:first", component: YksTegelaneComponent},
    { path: "muuda-tegelane/:first", component: MuudaTegelaneComponent},
    { path: "**", component: NotFoundComponent}
];
