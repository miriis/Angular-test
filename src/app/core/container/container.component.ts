import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/shared/mock-data';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  products = PRODUCTS;
  product!: IProduct;
  hide = true;
  cart = [];

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(value:any) {
    this.product= value;
    this.hide=false;
  }

  closeDetails(value:boolean) {
    this.hide= value;
  }

  addToCart(product:IProduct) {
    // @ts-ignore
    this.cart.push(product);
  }
}
