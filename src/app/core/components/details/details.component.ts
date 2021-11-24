import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() closeDetails = new EventEmitter<boolean>();
  @Output() addToCart = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

}
