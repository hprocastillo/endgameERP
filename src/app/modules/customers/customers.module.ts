import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersComponent} from './components/customers/customers.component';
import {ListCustomersComponent} from './components/list-customers/list-customers.component';
import {NewCustomerComponent} from './components/new-customer/new-customer.component';
import {
  NgbCarousel,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle, NgbPagination, NgbSlide
} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ViewCustomerComponent} from './components/view-customer/view-customer.component';
import {EditCustomerComponent} from './components/edit-customer/edit-customer.component';
import {ListCustomersItemComponent} from './components/list-customers-item/list-customers-item.component';
import {SearchCustomerPipe} from './pipes/search-customer.pipe';

@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    NewCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent,
    ListCustomersItemComponent,
    SearchCustomerPipe,
  ],
  exports: [
    ListCustomersItemComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbDropdownItem,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    NgbCarousel,
    NgbSlide,
    NgbPagination
  ]
})
export class CustomersModule {
}
