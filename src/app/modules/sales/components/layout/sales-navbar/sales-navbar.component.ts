import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sales-navbar',
  templateUrl: './sales-navbar.component.html',
  styleUrls: ['./sales-navbar.component.scss']
})
export class SalesNavbarComponent implements OnInit {
  collapsed = true;
  @Output() page = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  goSalesDaily(page: string) {
    this.page.emit(page);
    this.collapsed = true;
  }

  goSalesProducts(page: string) {
    this.page.emit(page);
    this.collapsed = true;
  }

  goSalesEmployees(page: string) {
    this.page.emit(page);
    this.collapsed = true;
  }

}
