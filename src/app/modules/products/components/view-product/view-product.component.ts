import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
  @Input() product = {} as Product;
  @Output() outTemplate = new EventEmitter<string>();

  /** VARIABLES **/
  imageFullSize: string = '';

  constructor(private modalService: NgbModal, private productService: ProductService) {
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  openModalDelete(modalDelete: any) {
    this.modalService.open(modalDelete, {centered: true, backdrop: "static"});
  }

  openModalPhoto(modalPhoto: any, product: Product) {
    this.modalService.open(modalPhoto, {centered: true, backdrop: "static"});
    this.imageFullSize = product.photoUrl;
  }

  async onDelete(product: Product) {
    try {
      await this.productService.deleteProduct(product);
      this.outTemplate.emit('listProducts');
      this.modalService.dismissAll();

    } catch (e) {
      console.log(e);
    }
  }

}
