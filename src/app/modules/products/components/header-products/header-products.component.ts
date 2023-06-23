import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-products',
  templateUrl: './header-products.component.html',
  styleUrls: ['./header-products.component.scss']
})
export class HeaderProductsComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
}
