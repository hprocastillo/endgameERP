import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-settings-products',
  templateUrl: './settings-products.component.html',
  styleUrls: ['./settings-products.component.scss']
})
export class SettingsProductsComponent {
  @Output() outTemplate = new EventEmitter<string>();

  searchText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  goToTemplate(template: string) {
    this.outTemplate.emit(template);
  }
}
