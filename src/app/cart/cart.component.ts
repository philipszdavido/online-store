import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-cart',
  template: 
  `
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" *ngFor="let product of cart | async">
      <div class="my-list">
          <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
          <h3>{{product.name}}</h3>
          <span>$</span>
          <span class="pull-right">{{product.price}}</span>
          <div class="offer">
            Extra 5% Off. Cart value $ {{0.5 * product.price}}
            <a (click)="removeFromCart(product)" class="btn btn-info">Remove From Cart</a>
          </div>
      </div>
    </div>
  `,
  styles: []
})
export class CartComponent implements OnInit {

  cart: Observable<Array<any>>
  constructor(private store:Store<any>) { 
    this.cart = this.store.select('cart')
  }

  ngOnInit() {
  }

  removeFromCart(product) {
    this.store.dispatch(new Cart.RemoveProduct(product))
  }

}
