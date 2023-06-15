import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Customer} from "../../interfaces/customer";
import {Subject, takeUntil} from "rxjs";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
  template: string = 'listCustomers';
  customerSelected = {} as Customer;
  listCustomers: Customer[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(
    public authService: AuthService,
    private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getCustomers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listCustomers = res;
      });
  }

  getTemplate(template: string) {
    this.template = template;
  }

  getCustomerSelected(customer: Customer) {
    this.template = 'viewCustomer';
    this.customerSelected = customer;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
