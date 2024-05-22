import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonRequestsService } from '../services/json-requests.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any[] = [];
  productsOriginal: any[] = [];
  price = 0;
  submitted = false;

  constructor (
    private jsonRequestService: JsonRequestsService
  ){}

  ngOnInit() {
    this.jsonRequestService.productsListData().subscribe(vastus => {
      this.products = vastus;
      this.productsOriginal = this.products;
    });
    console.log(this.products);
  }

  mostExpensive() {
    // const result = this.products.sort((a,b)=> b.price - a.price);
    // this.products = [result[0]];
    const result: any[] = [this.products[0]];
    let mostExpensive = this.products[0];
    this.products.forEach(product => {
      console.log(product);
      console.log(mostExpensive);
      if(mostExpensive.price === product.price ) {
        result.push(product);
      }
      if(mostExpensive.price < product.price ) {
        console.log("vahetasin mostexpensievet");
        result.splice(0);
        result.push(product);
        mostExpensive = product;
      }
    });
    this.products = result;
  }
  cheapest() {
    // const result = this.products.sort((a,b)=> a.price - b.price);
    // this.products = result;
    const result: any[] = [this.products[0]];
    let mostExpensive = this.products[0];
    this.products.forEach(product => {
      console.log(product);
      console.log(mostExpensive);
      if(mostExpensive.price === product.price ) {
        result.push(product);
      }
      if(mostExpensive.price > product.price ) {
        console.log("vahetasin mostexpensievet");
        result.splice(0);
        result.push(product);
        mostExpensive = product;
      }
    });
    this.products = result;
  }
  lowerPrice(){
    const result = this.products.filter(e => e.price <= this.price);
    this.products = result;
    this.submitted = true;
  }
  higherPrice(){
    const result = this.products.filter(e => e.price >= this.price);
    this.products = result;
    this.submitted = true;
  }
  restore(){
    this.submitted = false;
    this.products = this.productsOriginal;
    this.price = 0;
  }
}
