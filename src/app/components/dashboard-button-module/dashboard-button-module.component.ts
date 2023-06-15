import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-button-module',
  templateUrl: './dashboard-button-module.component.html',
  styleUrls: ['./dashboard-button-module.component.scss']
})
export class DashboardButtonModuleComponent {
  @Input() nameModule: string = '';
  @Input() iconModule: string = '';
  @Input() urlModule: string = '';

  constructor(private router: Router) {
  }

  async goModule(url: string) {
    try {
      await this.router.navigate([url]);
    } catch (e) {
      console.log(e);
    }
  }

}
