import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { shop } from '../models/shop';
import { ShopsService } from '../services/shops.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  private map: any;
  shops: shop[] = [];

  constructor( private shopsService: ShopsService){}

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 58.8838, 25.71998 ],
      zoom: 7
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void { 
    this.initMap();
    this.makeMarkers();
  }

  makeMarkers(): void {
    this.shopsService.shopsRequest().subscribe((shops: shop[]) => {
      this.shops = shops;
      for (const s of shops) {
        const lon = s.longitude;
        const lat = s.latitude;
        const marker = L.marker([lat, lon]);
        const popup = `<div>Poe nimi: ${ s.name }</div>` +
        `<div>Lahtiolekuaeg: ${ s.openTime }</div>`;

        marker.bindPopup(popup);
        
        marker.addTo(this.map);
      }
    });
  }
  zoomToShop(shop: shop) {
    // this.map = L.map('map', {
    //   center: [ 58.8838, 25.71998 ],
    //   zoom: 6
    // });
  }
}
