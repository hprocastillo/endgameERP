import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from "./components/customers/customers.component";
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '', component: CustomersComponent
  },
  {
    path: '', redirectTo: '/customers/dashboard', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
