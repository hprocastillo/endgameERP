import {Component, Input} from '@angular/core';
import {Customer} from "../../interfaces/customer";

@Component({
  selector: 'app-list-customers-item',
  templateUrl: './list-customers-item.component.html',
  styleUrls: ['./list-customers-item.component.scss']
})
export class ListCustomersItemComponent {
  @Input() customer = {} as Customer;
}
