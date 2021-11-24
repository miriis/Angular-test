import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() products: IProduct[] = []
  @Output() productDetails = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

}
