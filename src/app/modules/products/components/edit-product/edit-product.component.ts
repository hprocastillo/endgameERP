import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";
import {Timestamp} from "firebase/firestore";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})

export class EditProductComponent {
  @Input() product = {} as Product;
  @Input() firebaseUser = {} as User;
  @Output() outTemplate = new EventEmitter<string>();

  /** VARIABLES **/
  loadingEffect: boolean = false;
  photo_file: string | any;
  photo_preview: string = '';

  constructor(
    private productService: ProductService,
    private storage: Storage) {
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  take_photo($event: any) {
    this.photo_file = $event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.photo_preview = reader.result as string;
    }
    reader.readAsDataURL(this.photo_file);
  }

  async onSubmit(product: Product, firebaseUser: User) {
    this.loadingEffect = true;
    let editProduct: Product;
    editProduct = product;
    editProduct.updatedAt = Timestamp.fromDate(new Date());
    editProduct.updatedBy = firebaseUser.uid;

    /************* UPLOAD PHOTO *****************/
    if (this.photo_file) {
      const storageRef = ref(this.storage, `products/${this.photo_file.name}`);
      uploadBytes(storageRef, this.photo_file)
        .then(async () => {
          editProduct.photoUrl = await getDownloadURL(storageRef);
          await this.productService.updateProduct(editProduct);
          this.outTemplate.emit('viewProduct');
        })
        .catch((e) => console.log(e));

    } else {
      await this.productService.updateProduct(editProduct);
      this.outTemplate.emit('viewProduct');
    }
  }

}
