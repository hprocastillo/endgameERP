import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "@angular/fire/auth";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {Timestamp} from "firebase/firestore";
import {ProductService} from "../../services/product.service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})

export class NewProductComponent {
  @Input() firebaseUser = {} as User;
  @Output() outTemplate = new EventEmitter<string>();

  /** VARIABLES **/
  newProductForm: FormGroup;
  loadingEffect: boolean = false;
  photo_file: string | any;
  photo_preview: string = '';

  constructor(
    private productService: ProductService,
    private storage: Storage,
    private fb: FormBuilder) {

    this.newProductForm = this.fb.group({
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      barcode: [''],
      stock: [''],
    });
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

  async onSubmit(firebaseUser: User) {
    this.loadingEffect = true;
    let newProduct: Product;

    if (this.newProductForm.valid) {
      newProduct = this.newProductForm.value;
      newProduct.createdAt = Timestamp.fromDate(new Date());
      newProduct.updatedAt = Timestamp.fromDate(new Date());
      newProduct.createdBy = firebaseUser.uid;
      newProduct.updatedBy = firebaseUser.uid;

      /** UPLOAD PHOTO **/
      if (this.photo_file) {
        const storageRef = ref(this.storage, `products/${this.photo_file.name}`);
        uploadBytes(storageRef, this.photo_file)
          .then(async () => {
            newProduct.photoUrl = await getDownloadURL(storageRef);
            await this.productService.addProduct(newProduct);
            this.newProductForm.reset();
            this.outTemplate.emit('listProducts');
          })
          .catch((e) => console.log(e));

      } else {
        newProduct.photoUrl = './assets/images/modules/products/product.png';
        await this.productService.addProduct(newProduct);
        this.newProductForm.reset();
        this.outTemplate.emit('listProducts');
      }
    }
  }
}
