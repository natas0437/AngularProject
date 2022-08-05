import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProdukRoutingModule } from './product-routing.module';
import { FormProdukComponent } from './form-product/form-product.component';
import { ListProdukComponent } from './list-product/list-product.component';


@NgModule({
  declarations: [
    ListProdukComponent,
    FormProdukComponent
  ],
  imports: [
    CommonModule,
    ProdukRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class ProdukModule {
}
