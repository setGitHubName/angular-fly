import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import { PayService } from '../pay.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor( private route: ActivatedRoute, private cartService: CartService, private payService: PayService,) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[params.get("productIdd")];
     (JSON.stringify(params.get('productId')));
  });
}


  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
    this.selectPayMethod(product);
  }
selectPayMethod(product) {
    window.alert('please select your payMethod of your product');
    this.payService.getPayMethod(product);
  }
}