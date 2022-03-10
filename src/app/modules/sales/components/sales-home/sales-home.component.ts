import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sales-home',
  templateUrl: './sales-home.component.html',
  styleUrls: ['./sales-home.component.scss']
})
export class SalesHomeComponent implements OnInit {

  //Pages
  pageSalesDaily: boolean = true;
  pageSalesView: boolean = false;
  pageSalesProducts: boolean = false;
  pageSalesEmployees: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  getPage(event: string) {
    switch (event) {
      case 'salesDaily':
        this.pageSalesDaily = true;
        this.pageSalesProducts = false;
        this.pageSalesEmployees = false;
        break;
      case 'salesProducts':
        this.pageSalesDaily = false;
        this.pageSalesProducts = true;
        this.pageSalesEmployees = false;
        break;
      case 'salesEmployees':
        this.pageSalesDaily = false;
        this.pageSalesProducts = false;
        this.pageSalesEmployees = true;
        break;
      default:
        break;
    }
  }

}
