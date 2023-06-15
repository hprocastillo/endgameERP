import {Component, Input} from '@angular/core';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-list-products-item',
  templateUrl: './list-products-item.component.html',
  styleUrls: ['./list-products-item.component.scss']
})
export class ListProductsItemComponent {
  @Input() product = {} as Product;
}
