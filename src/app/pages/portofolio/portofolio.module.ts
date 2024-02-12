import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortofolioRoutingModule } from './portofolio-routing.module';
import { ListPortofolioComponent } from './list-portofolio/list-portofolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPortofolioComponent } from './form-portofolio/form-portofolio.component';
import { IconModule } from '@coreui/icons-angular';
import { FormExperiencesComponent } from './form-experiences/form-experiences.component';
import { FormKnowledgeComponent } from './form-knowledge/form-knowledge.component';

@NgModule({
  declarations: [
    ListPortofolioComponent,
    FormPortofolioComponent,
    FormExperiencesComponent,
    FormKnowledgeComponent,
    
  ],
  imports: [
    CommonModule,
    PortofolioRoutingModule,
    IconModule,
    ReactiveFormsModule,
    
  ]
})
export class PortofolioModule { }
