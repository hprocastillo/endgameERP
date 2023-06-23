import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {AuthService} from "../../../../services/auth.service";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  template: string = 'listProducts';
  productSelected = {} as Product;
  listProducts: Product[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(public authService: AuthService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listProducts = res;
      });
  }

  getTemplate(template: string) {
    this.template = template;
  }

  getProductSelected(product: Product) {
    this.template = 'viewProduct';
    this.productSelected = product;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
