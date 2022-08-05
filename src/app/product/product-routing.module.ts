import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormProdukComponent } from './form-product/form-product.component';
import { ListProdukComponent } from './list-product/list-product.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListProdukComponent
  },
  {
    path: 'form',
    component: FormProdukComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdukRoutingModule {
}
