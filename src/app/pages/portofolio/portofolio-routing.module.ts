import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPortofolioComponent } from './list-portofolio/list-portofolio.component';
import {FormPortofolioComponent} from "./form-portofolio/form-portofolio.component";
import { FormExperiencesComponent } from './form-experiences/form-experiences.component';
import { FormKnowledgeComponent } from './form-knowledge/form-knowledge.component';

const routes: Routes = [
  {
    path:'',
    component: ListPortofolioComponent,
    data: {
      title: 'List Portofolio'
    }
  },
  {
    path:'add_project',
    component: FormPortofolioComponent,
    data: {
      title: 'Add Project'
    }
  },
  {
    path:'update_project',
    component: FormPortofolioComponent,
    data: {
      title: 'Update Project'
    }
  },
  {
    path:'add_experiences',
    component: FormExperiencesComponent,
    data: {
      title: 'Add Experiences'
    }
  },
  {
    path:'update_experiences',
    component: FormExperiencesComponent,
    data: {
      title: 'Update Experiences'
    }
  },
  {
    path:'add_knowlegde',
    component: FormKnowledgeComponent,
    data: {
      title: 'Add knowledge'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortofolioRoutingModule { }
