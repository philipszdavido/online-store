import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from "./../store/market";
import { Product } from "./../store/product.model"
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-product',
  template: 
  `
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="my-list">
          <img src="http://hpservicecenterschennai.in/images/hp_laptop_service_centers_in_guindy.png" alt="" />
          <h3>{{product.name}}</h3>
          <span>$</span>
          <span class="pull-right">{{product.price}}</span>
          <div class="offer">
            Extra 5% Off. Cart value $ {{0.5 * product.price}}
          </div>
          <div class="offer">
            <a (click)="addToCart(product)" class="btn btn-info">Add To Cart</a>
          </div>
      </div>
    </div>
  `,
  styles: [ ]
})
export class ProductComponent implements OnInit {

  product:Product

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.route.params.subscribe((p)=>{
        let id = p['id']
        let result = Array.prototype.filter.call(PRODUCTS,(v)=>v.id == id)
        if (result.length > 0) {
          this.product = result[0]
        }
    })
  }

  addToCart(product) {
        this.store.dispatch(new Cart.AddProduct(product))
  }

}
