import {Component, EventEmitter, Input, Output} from '@angular/core';
import {getDownloadURL, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../interfaces/customer";
import {Timestamp} from "firebase/firestore";
import {User} from "@angular/fire/auth";
import {CustomerService} from "../../services/customer.service";
import {DatesService} from "../../../../services/dates.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})

export class NewCustomerComponent {
  @Input() firebaseUser = {} as User;
  @Output() btnCancel = new EventEmitter<string>();
  @Output() btnSave = new EventEmitter<string>();

  /** VARIABLES **/
  newCustomerForm: FormGroup;
  birthDay: any;
  loadingEffect: boolean = false;

  /** PHOTO FILES **/
  photo1_file: string | any;
  photo1_preview: string = '';
  photo2_file: string | any;
  photo2_preview: string = '';
  photo3_file: string | any;
  photo3_preview: string = '';

  constructor(
    private customerService: CustomerService,
    private datesService: DatesService,
    private storage: Storage,
    private fb: FormBuilder) {

    this.newCustomerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      userSystem: [''],
      facebookUrl: [''],
      instagramUrl: [''],
    });
  }

  toCancel(template: string) {
    this.btnCancel.emit(template);
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

  async onSubmit(firebaseUser: User) {
    this.loadingEffect = true;
    let newCustomer: Customer;

    if (this.newCustomerForm.valid) {
      newCustomer = this.newCustomerForm.value;
      newCustomer.photoUrl1 = './assets/images/modules/customers/customer.png';
      newCustomer.photoUrl2 = './assets/images/modules/customers/customer.png';
      newCustomer.photoUrl3 = './assets/images/modules/customers/customer.png';
      newCustomer.birthDay = Timestamp.fromDate(this.birthDay);
      newCustomer.createdAt = Timestamp.fromDate(new Date());
      newCustomer.createdBy = firebaseUser.uid;
      newCustomer.updatedAt = Timestamp.fromDate(new Date());
      newCustomer.updatedBy = firebaseUser.uid;


      /********************* UPLOAD ALL PHOTOS **********************/
      if (this.photo1_file && this.photo2_file && this.photo3_file) {
        const storageRef1 = ref(this.storage, `customers/${this.photo1_file.name}`);
        const storageRef2 = ref(this.storage, `customers/${this.photo2_file.name}`);
        const storageRef3 = ref(this.storage, `customers/${this.photo3_file.name}`);

        /** UPLOAD PHOTO 1 **/
        uploadBytes(storageRef1, this.photo1_file)
          .then(async () => {
            newCustomer.photoUrl1 = await getDownloadURL(storageRef1);

            /** UPLOAD PHOTO 2 **/
            uploadBytes(storageRef2, this.photo2_file)
              .then(async () => {
                newCustomer.photoUrl2 = await getDownloadURL(storageRef2);

                /** UPLOAD PHOTO 3 **/
                uploadBytes(storageRef3, this.photo3_file)
                  .then(async () => {
                    newCustomer.photoUrl3 = await getDownloadURL(storageRef3);
                    await this.customerService.addCustomer(newCustomer);
                    this.newCustomerForm.reset();
                    this.btnSave.emit('listCustomers');

                  })
                  .catch((e) => console.log(e));
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e));


        /********************* DO NOT UPLOAD ANYTHING ************************/
      } else if (!this.photo1_file && !this.photo2_file && !this.photo3_file) {
        await this.customerService.addCustomer(newCustomer);
        this.newCustomerForm.reset();
        this.btnSave.emit('listCustomers');


        /********************** UPLOAD JUST PHOTO 1 *************************/
      } else if (this.photo1_file && !this.photo2_file && !this.photo3_file) {
        const storageRef1 = ref(this.storage, `customers/${this.photo1_file.name}`);

        uploadBytes(storageRef1, this.photo1_file)
          .then(async () => {
            newCustomer.photoUrl1 = await getDownloadURL(storageRef1);
            await this.customerService.addCustomer(newCustomer);
            this.newCustomerForm.reset();
            this.btnSave.emit('listCustomers');

          })
          .catch((e) => console.log(e));


        /********************** UPLOAD JUST PHOTO 2 *************************/
      } else if (!this.photo1_file && this.photo2_file && !this.photo3_file) {
        const storageRef2 = ref(this.storage, `customers/${this.photo2_file.name}`);

        uploadBytes(storageRef2, this.photo2_file)
          .then(async () => {
            newCustomer.photoUrl2 = await getDownloadURL(storageRef2);
            await this.customerService.addCustomer(newCustomer);
            this.newCustomerForm.reset();
            this.btnSave.emit('listCustomers');

          })
          .catch((e) => console.log(e));


        /********************** UPLOAD JUST PHOTO 3 *************************/
      } else if (!this.photo1_file && !this.photo2_file && this.photo3_file) {
        const storageRef3 = ref(this.storage, `customers/${this.photo3_file.name}`);

        uploadBytes(storageRef3, this.photo3_file)
          .then(async () => {
            newCustomer.photoUrl3 = await getDownloadURL(storageRef3);
            await this.customerService.addCustomer(newCustomer);
            this.newCustomerForm.reset();
            this.btnSave.emit('listCustomers');

          })
          .catch((e) => console.log(e));


        /******************** UPLOAD JUST PHOTO 1 AND 2 **********************/
      } else if (this.photo1_file && this.photo2_file && !this.photo3_file) {
        const storageRef1 = ref(this.storage, `customers/${this.photo1_file.name}`);
        const storageRef2 = ref(this.storage, `customers/${this.photo2_file.name}`);

        /** UPLOAD PHOTO 1 **/
        uploadBytes(storageRef1, this.photo1_file)
          .then(async () => {
            newCustomer.photoUrl1 = await getDownloadURL(storageRef1);

            /** UPLOAD PHOTO 2 **/
            uploadBytes(storageRef2, this.photo2_file)
              .then(async () => {
                newCustomer.photoUrl2 = await getDownloadURL(storageRef2);
                await this.customerService.addCustomer(newCustomer);
                this.newCustomerForm.reset();
                this.btnSave.emit('listCustomers');

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
            newCustomer.photoUrl1 = await getDownloadURL(storageRef1);

            /** UPLOAD PHOTO 3 **/
            uploadBytes(storageRef3, this.photo3_file)
              .then(async () => {
                newCustomer.photoUrl3 = await getDownloadURL(storageRef3);
                await this.customerService.addCustomer(newCustomer);
                this.newCustomerForm.reset();
                this.btnSave.emit('listCustomers');

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
            newCustomer.photoUrl2 = await getDownloadURL(storageRef2);

            /** UPLOAD PHOTO 3 **/
            uploadBytes(storageRef3, this.photo3_file)
              .then(async () => {
                newCustomer.photoUrl3 = await getDownloadURL(storageRef3);
                await this.customerService.addCustomer(newCustomer);
                this.newCustomerForm.reset();
                this.btnSave.emit('listCustomers');

              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e));
      }
    }
  }
}
