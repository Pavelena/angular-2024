import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VideosComponent } from './videos/videos.component';
import { WinnersComponent } from './winners/winners.component';
import { YearComponent } from './year/year.component';
import { YearsComponent } from './years/years.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: "voitjad", component: WinnersComponent},
    { path: "riigid", component: CountriesComponent},
    { path: "riigid/:id", component: CountryComponent},
    { path: "videod", component: VideosComponent},
    { path: "aastad", component: YearsComponent},
    { path: "aasta/:year", component: YearComponent}
];
