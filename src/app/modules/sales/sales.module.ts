//MODULES
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {NgbDatepickerModule, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {SalesRoutingModule} from './sales-routing.module';

//COMPONENTS
import {SalesHomeComponent} from './components/sales-home/sales-home.component';
import {SalesSidebarComponent} from './components/layout/sales-sidebar/sales-sidebar.component';
import {SalesProductsComponent} from './components/sections/sales-products/sales-products.component';
import {SalesEmployeesComponent} from './components/sections/sales-employees/sales-employees.component';
import {SalesDailyComponent} from './components/sections/sales-daily/sales-daily.component';
import {SalesNavbarComponent} from './components/layout/sales-navbar/sales-navbar.component';
import {SalesDailyViewComponent} from './components/sections/sales-daily/sales-daily-view/sales-daily-view.component';
import {SalesDailyListComponent} from './components/sections/sales-daily/sales-daily-list/sales-daily-list.component';
import {SalesDailyNewComponent} from './components/sections/sales-daily/sales-daily-new/sales-daily-new.component';

@NgModule({
  declarations: [
    SalesHomeComponent,
    SalesSidebarComponent,
    SalesProductsComponent,
    SalesEmployeesComponent,
    SalesDailyComponent,
    SalesNavbarComponent,
    SalesDailyViewComponent,
    SalesDailyListComponent,
    SalesDailyNewComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    NgbDropdownModule,
    FormsModule,
    NgbDatepickerModule
  ]
})
export class SalesModule {
}
