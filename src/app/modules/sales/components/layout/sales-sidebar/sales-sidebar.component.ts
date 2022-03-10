import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sales-sidebar',
  templateUrl: './sales-sidebar.component.html',
  styleUrls: ['./sales-sidebar.component.scss']
})
export class SalesSidebarComponent implements OnInit {

  @Output() page = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  goSalesDaily(page: string) {
    this.page.emit(page);
  }

  goSalesProducts(page: string) {
    this.page.emit(page);
  }

  goSalesEmployees(page: string) {
    this.page.emit(page);
  }

}
