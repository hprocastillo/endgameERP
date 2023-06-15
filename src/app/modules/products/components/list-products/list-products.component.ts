import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../interfaces/product";
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  @Input() listProducts: Product[] = [];
  @Output() productSelected = new EventEmitter<Product>();
  @Output() outTemplate = new EventEmitter<string>();

  /** VARIABLES **/
  page: number = 1;
  pageSize: number = 5;
  searchText: string = '';

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  getProduct(product: Product) {
    this.productSelected.emit(product);
  }
}
