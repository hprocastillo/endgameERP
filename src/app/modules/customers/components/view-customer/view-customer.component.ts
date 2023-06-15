import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Customer} from "../../interfaces/customer";
import {CustomerService} from "../../services/customer.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent {
  @Input() customer = {} as Customer;
  @Output() outTemplate = new EventEmitter<string>();

  /** VARIABLES **/
  imageFullSize: string = '';

  constructor(private modalService: NgbModal, private customerService: CustomerService) {
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  openModalDelete(modalDelete: any) {
    this.modalService.open(modalDelete, {centered: true, backdrop: "static"});
  }

  openModalPhoto(modalPhoto: any, photo: string) {
    this.modalService.open(modalPhoto, {centered: true, backdrop: "static"});
    this.imageFullSize = photo;
  }

  async onDelete(customer: Customer) {
    try {
      await this.customerService.deleteCustomer(customer);
      this.outTemplate.emit('listCustomers');
      this.modalService.dismissAll();

    } catch (e) {
      console.log(e);
    }
  }
}
