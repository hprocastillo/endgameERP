import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-daily-view',
  templateUrl: './sales-daily-view.component.html',
  styleUrls: ['./sales-daily-view.component.scss']
})
export class SalesDailyViewComponent implements OnInit {
  today = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
