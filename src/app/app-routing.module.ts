import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
