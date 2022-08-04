import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProdusenRoutingModule} from './produsen-routing.module';
import {ListProdusenComponent} from './list-produsen/list-produsen.component';
import {HttpClientModule} from "@angular/common/http";
import { FormProdusenComponent } from './form-produsen/form-produsen.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListProdusenComponent,
    FormProdusenComponent
  ],
  imports: [
    CommonModule,
    ProdusenRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdusenModule {
}
