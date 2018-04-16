import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from "./../store/market";

@Component({
  selector: 'app-products',
  template: `
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" *ngFor="let product of products">
            <div class="my-list">
                <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
                <h3>{{product.name}}</h3>
                <span>$</span>
                <span class="pull-right">{{product.price}}</span>
                <div class="offer">Extra 5% Off. Cart value $ {{0.5 * product.price}}</div>
                <div class="detail">
                    <p>{{product.name}} </p>
                    <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
                    <a [routerLink]="['/product',product.id]" class="btn btn-info">View</a>
                </div>
            </div>    
  `,
  styles: [ ]
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS

  constructor() { }

  ngOnInit() {
  }

}
