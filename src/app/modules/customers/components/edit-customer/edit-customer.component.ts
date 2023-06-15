import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../interfaces/customer";
import {User} from "@angular/fire/auth";
import {CustomerService} from "../../services/customer.service";
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {Timestamp} from "firebase/firestore";
import {DatesService} from "../../../../services/dates.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  @Input() customer = {} as Customer;
  @Input() firebaseUser = {} as User;
  @Output() outTemplate = new EventEmitter<string>();

  /** VARIABLES **/
  birthdayValueDefault: string = '';
  birthDay: any;
  loadingEffect: boolean = false;

  /** PHOTO FILES **/
  photo1_file: string | any;
  photo1_preview: string = '';
  photo2_file: string | any;
  photo2_preview: string = '';
  photo3_file: string | any;
  photo3_preview: string = '';

  constructor(private datesService: DatesService, private customerService: CustomerService, private storage: Storage) {
  }

  ngOnInit(): void {
    if (this.customer.birthDay) {
      this.birthdayValueDefault = this.datesService.setDateToInput(this.customer.birthDay);
    }
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  getBirthday($event: any) {
    this.birthDay = this.datesService.getDateFromInput($event);
  }
  take_photo1($event: any) {
    this.photo1_file = $event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.photo1_preview = reader.result as string;
    }
    reader.readAsDataURL(this.photo1_file);
  }

  take_photo2($event: any) {
    this.photo2_file = $event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.photo2_preview = reader.result as string;
    }
    reader.readAsDataURL(this.photo2_file);
  }

  take_photo3($event: any) {
    this.photo3_file = $event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.photo3_preview = reader.result as string;
    }
    reader.readAsDataURL(this.photo3_file);
  }

  async onSubmit(customer: Customer, firebaseUser: User) {
    this.loadingEffect = true;
    let editCustomer: Customer;
    editCustomer = customer;
    editCustomer.updatedAt = Timestamp.fromDate(new Date());
    editCustomer.updatedBy = firebaseUser.uid;

    if (this.birthDay) {
      editCustomer.birthDay = Timestamp.fromDate(this.birthDay);
    }

    /********************* UPLOAD ALL PHOTOS **********************/
    if (this.photo1_file && this.photo2_file && this.photo3_file) {
      const storageRef1 = ref(this.storage, `customers/${this.photo1_file.name}`);
      const storageRef2 = ref(this.storage, `customers/${this.photo2_file.name}`);
      const storageRef3 = ref(this.storage, `customers/${this.photo3_file.name}`);

      /** UPLOAD PHOTO 1 **/
      uploadBytes(storageRef1, this.photo1_file)
        .then(async () => {
          editCustomer.photoUrl1 = await getDownloadURL(storageRef1);

          /** UPLOAD PHOTO 2 **/
          uploadBytes(storageRef2, this.photo2_file)
            .then(async () => {
              editCustomer.photoUrl2 = await getDownloadURL(storageRef2);

              /** UPLOAD PHOTO 3 **/
              uploadBytes(storageRef3, this.photo3_file)
                .then(async () => {
                  editCustomer.photoUrl3 = await getDownloadURL(storageRef3);
                  await this.customerService.updateCustomer(editCustomer);
                  this.outTemplate.emit('viewCustomer');

                })
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));


      /********************* DO NOT UPLOAD ANYTHING ************************/
    } else if (!this.photo1_file && !this.photo2_file && !this.photo3_file) {
      await this.customerService.updateCustomer(editCustomer);
      this.outTemplate.emit('viewCustomer');


      /********************** UPLOAD JUST PHOTO 1 *************************/
    } else if (this.photo1_file && !this.photo2_file && !this.photo3_file) {
      const storageRef1 = ref(this.storage, `customers/${this.photo1_file.name}`);

      uploadBytes(storageRef1, this.photo1_file)
        .then(async () => {
          editCustomer.photoUrl1 = await getDownloadURL(storageRef1);
          await this.customerService.updateCustomer(editCustomer);
          this.outTemplate.emit('viewCustomer');

        })
        .catch((e) => console.log(e));


      /********************** UPLOAD JUST PHOTO 2 *************************/
    } else if (!this.photo1_file && this.photo2_file && !this.photo3_file) {
      const storageRef2 = ref(this.storage, `customers/${this.photo2_file.name}`);

      uploadBytes(storageRef2, this.photo2_file)
        .then(async () => {
          editCustomer.photoUrl2 = await getDownloadURL(storageRef2);
          await this.customerService.updateCustomer(editCustomer);
          this.outTemplate.emit('viewCustomer');

        })
        .catch((e) => console.log(e));


      /********************** UPLOAD JUST PHOTO 3 *************************/
    } else if (!this.photo1_file && !this.photo2_file && this.photo3_file) {
      const storageRef3 = ref(this.storage, `customers/${this.photo3_file.name}`);

      uploadBytes(storageRef3, this.photo3_file)
        .then(async () => {
          editCustomer.photoUrl3 = await getDownloadURL(storageRef3);
          await this.customerService.updateCustomer(editCustomer);
          this.outTemplate.emit('viewCustomer');

        })
        .catch((e) => console.log(e));


      /******************** UPLOAD JUST PHOTO 1 AND 2 **********************/
    } else if (this.photo1_file && this.photo2_file && !this.photo3_file) {
      const storageRef1 = ref(this.storage, `customers/${this.photo1_file.name}`);
      const storageRef2 = ref(this.storage, `customers/${this.photo2_file.name}`);

      /** UPLOAD PHOTO 1 **/
      uploadBytes(storageRef1, this.photo1_file)
        .then(async () => {
          editCustomer.photoUrl1 = await getDownloadURL(storageRef1);

          /** UPLOAD PHOTO 2 **/
          uploadBytes(storageRef2, this.photo2_file)
            .then(async () => {
              editCustomer.photoUrl2 = await getDownloadURL(storageRef2);
              await this.customerService.updateCustomer(editCustomer);
              this.outTemplate.emit('viewCustomer');

            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));


      /******************* UPLOAD JUST PHOTO 1 AND 3 **********************/
    } else if (this.photo1_file && !this.photo2_file && this.photo3_file) {
      const storageRef1 = ref(this.storage, `customers/${this.photo1_file.name}`);
      const storageRef3 = ref(this.storage, `customers/${this.photo3_file.name}`);

      /** UPLOAD PHOTO 1 **/
      uploadBytes(storageRef1, this.photo1_file)
        .then(async () => {
          editCustomer.photoUrl1 = await getDownloadURL(storageRef1);

          /** UPLOAD PHOTO 3 **/
          uploadBytes(storageRef3, this.photo3_file)
            .then(async () => {
              editCustomer.photoUrl3 = await getDownloadURL(storageRef3);
              await this.customerService.updateCustomer(editCustomer);
              this.outTemplate.emit('viewCustomer');

            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));


      /******************* UPLOAD JUST PHOTO 2 AND 3 **********************/
    } else if (!this.photo1_file && this.photo2_file && this.photo3_file) {
      const storageRef2 = ref(this.storage, `customers/${this.photo2_file.name}`);
      const storageRef3 = ref(this.storage, `customers/${this.photo3_file.name}`);

      /** UPLOAD PHOTO 2 **/
      uploadBytes(storageRef2, this.photo2_file)
        .then(async () => {
          editCustomer.photoUrl2 = await getDownloadURL(storageRef2);

          /** UPLOAD PHOTO 3 **/
          uploadBytes(storageRef3, this.photo3_file)
            .then(async () => {
              editCustomer.photoUrl3 = await getDownloadURL(storageRef3);
              await this.customerService.updateCustomer(editCustomer);
              this.outTemplate.emit('viewCustomer');

            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    }
  }

}
