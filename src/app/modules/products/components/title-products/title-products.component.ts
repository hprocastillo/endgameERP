import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-products',
  templateUrl: './title-products.component.html',
  styleUrls: ['./title-products.component.scss']
})
export class TitleProductsComponent {
  @Input() title: string = '';
}
