import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesHomeComponent} from "./components/sales-home/sales-home.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: SalesHomeComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {
}
