import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Customer} from "../../interfaces/customer";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent {
  @Input() listCustomers: Customer[] = [];
  @Output() customerSelected = new EventEmitter<Customer>();
  @Output() outTemplate = new EventEmitter<string>();

  /** VARIABLES **/
  page: number = 1;
  pageSize: number = 4;
  searchText: string = '';

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  getCustomerSelected(customer: Customer) {
    this.customerSelected.emit(customer);
  }
}
