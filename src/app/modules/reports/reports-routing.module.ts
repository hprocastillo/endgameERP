import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportsHomeComponent} from "./components/reports-home/reports-home.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: ReportsHomeComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
