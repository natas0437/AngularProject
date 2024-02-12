import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTrainerComponent } from './list-trainer/list-trainer.component';
import { FormTrainerExperiencesComponent } from './form-trainer-experiences/form-trainer-experiences.component';
import { FormTrainerKnowledgeComponent } from './form-trainer-knowledge/form-trainer-knowledge.component';
import { FormTrainerProjectComponent } from './form-trainer-project/form-trainer-project.component';


const routes: Routes = [
  {
    path:'',
    component: ListTrainerComponent,
    data: {
      title: 'List Portofolio'
    }
  },
  {
    path:'add_project_trainer',
    component: FormTrainerProjectComponent,
    data: {
      title: 'Add Project Trainer'
    }
  },
  {
    path:'update_project_trainer',
    component: FormTrainerProjectComponent,
    data: {
      title: 'Update Project Trainer'
    }
  },
  {
    path:'add_experiences_trainer',
    component: FormTrainerExperiencesComponent,
    data: {
      title: 'Add Experiences Trainer'
    }
  },
  {
    path:'update_experiences_trainer',
    component: FormTrainerExperiencesComponent,
    data: {
      title: 'Update Experiences Trainer'
    }
  },
  {
    path:'add_knowlegde_trainer',
    component: FormTrainerKnowledgeComponent,
    data: {
      title: 'Add knowledge Trainer'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortofolioTrainerRoutingModule { }
