import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";
import {ProductsComponent} from "./components/products/products.component";

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: '', redirectTo: '/products/dashboard', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
