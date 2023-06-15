import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListProductsItemComponent } from './components/list-products-item/list-products-item.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { TitleProductsComponent } from './components/title-products/title-products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchProductPipe } from './pipes/search-product.pipe';
import {NgbCarousel, NgbPagination, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import { SettingsProductsComponent } from './components/settings-products/settings-products.component';
import { CategoriesProductsComponent } from './components/categories-products/categories-products.component';
import { BrandsProductsComponent } from './components/brands-products/brands-products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ListProductsComponent,
    ListProductsItemComponent,
    NewProductComponent,
    EditProductComponent,
    ViewProductComponent,
    TitleProductsComponent,
    SearchProductPipe,
    SettingsProductsComponent,
    CategoriesProductsComponent,
    BrandsProductsComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        NgOptimizedImage,
        ReactiveFormsModule,
        NgbCarousel,
        NgbSlide,
        NgbPagination
    ]
})
export class ProductsModule { }
