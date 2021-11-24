import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() products: IProduct[] = [];
  @Output() showDetails = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

}
