import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortofolioTrainerRoutingModule } from './portofolio-trainer-routing.module';
import { ListTrainerComponent } from './list-trainer/list-trainer.component';
import { FormTrainerExperiencesComponent } from './form-trainer-experiences/form-trainer-experiences.component';
import { FormTrainerKnowledgeComponent } from './form-trainer-knowledge/form-trainer-knowledge.component';
import { FormTrainerProjectComponent } from './form-trainer-project/form-trainer-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    ListTrainerComponent,
    FormTrainerExperiencesComponent,
    FormTrainerKnowledgeComponent,
    FormTrainerProjectComponent
  ],
  imports: [
    CommonModule,
    PortofolioTrainerRoutingModule,
    IconModule,
    ReactiveFormsModule,
  ]
})
export class PortofolioTrainerModule { }
