import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goSales() {
    this.router.navigate(['sales/home']).then();
  }

  goFinance() {
    this.router.navigate(['finance/home']).then();
  }

  goInventory() {
    this.router.navigate(['inventory/home']).then();
  }

  goReports() {
    this.router.navigate(['reports/home']).then();
  }

}
