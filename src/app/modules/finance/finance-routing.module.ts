import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinanceHomeComponent} from "./components/finance-home/finance-home.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: FinanceHomeComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule {
}
