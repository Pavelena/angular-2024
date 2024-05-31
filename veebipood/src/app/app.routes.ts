import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EsindusedComponent } from './esindused/esindused.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { ImageComponent } from './image/image.component';
import { KategooriaComponent } from './kategooria/kategooria.component';
import { KinkekaartComponent } from './kinkekaart/kinkekaart.component'; 
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { MapComponent } from './map/map.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component'; 
import { SeadedComponent } from './seaded/seaded.component';
import { ShopComponent } from './shop/shop.component';
import { TarnijaComponent } from './tarnija/tarnija.component';
import { YksEsindusComponent } from './yks-esindus/yks-esindus.component';
import { YksToodeComponent } from './yks-toode/yks-toode.component';

export const routes: Routes = [
    {path: "", component: AvalehtComponent},
    {path: "kinkekaart", component: KinkekaartComponent},
    {path: "lisa-toode", component: LisaToodeComponent},
    {path: "ostukorv", component: OstukorvComponent},
    {path: "seaded", component: SeadedComponent},
    {path: "halda", component: HaldaTooteidComponent},
    {path: "esindused", component: EsindusedComponent},
    {path: "tarnija", component: TarnijaComponent},
    {path: "kategooria", component: KategooriaComponent},
    {path: "poed", component: ShopComponent},
    {path: "pildid", component: ImageComponent},
    {path: "map", component: MapComponent},
    {path: "contact-us", component: ContactUsComponent},
    {path: "toode/:nimi", component: YksToodeComponent},
    {path: "muuda-toode/:nimi", component: MuudaToodeComponent},
    {path: "esindus/:linn/:index", component: YksEsindusComponent},
    {path:"**", component: NotFoundComponent}
];
