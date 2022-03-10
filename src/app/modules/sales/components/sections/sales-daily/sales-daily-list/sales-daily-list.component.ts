import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sales-daily-list',
  templateUrl: './sales-daily-list.component.html',
  styleUrls: ['./sales-daily-list.component.scss']
})
export class SalesDailyListComponent implements OnInit {

  //VARIABLES
  today = new Date();
  toolBox: boolean = true;
  searchBox: boolean = false;
  model: NgbDateStruct | undefined;

  listSales = [
    {id: '0', name: 'Herbert Pro', amountFinal: 350},
    {id: '1', name: 'Herbert Pro', amountFinal: 250},
    {id: '2', name: 'Herbert Pro', amountFinal: 305},
    {id: '3', name: 'Herbert Pro', amountFinal: 315},
    {id: '4', name: 'Herbert Pro', amountFinal: 278},
    {id: '5', name: 'Herbert Pro', amountFinal: 235},
    {id: '6', name: 'Herbert Pro', amountFinal: 311},
    {id: '7', name: 'Herbert Pro', amountFinal: 403},
    {id: '8', name: 'Herbert Pro', amountFinal: 376},
    {id: '9', name: 'Herbert Pro', amountFinal: 312},
    {id: '10', name: 'Herbert Pro', amountFinal: 289},
    {id: '11', name: 'Herbert Pro', amountFinal: 276},
    {id: '12', name: 'Herbert Pro', amountFinal: 310},
    {id: '13', name: 'Herbert Pro', amountFinal: 460}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
