import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {PortofolioTrainerService} from '../portofolio-trainer.service';


@Component({
  selector: 'app-form-trainer-project',
  templateUrl: './form-trainer-project.component.html',
  styleUrls: ['./form-trainer-project.component.scss']
})
export class FormTrainerProjectComponent implements OnInit {

  formTrainerProject!: FormGroup;

  idTrainer!: number;
  jenisProjectTrainer: string = 'update';

  constructor(private formBuild: FormBuilder,
    private router: Router,
    private _PortofolioTrainerService: PortofolioTrainerService,
    private activatedRoute: ActivatedRoute) { 
  this.formTrainerProject = this.formBuild.group({
    projectName: new FormControl(null,[Validators.required]),
    dateTheprojectWasCreated: new FormControl(null,[Validators.required]),
    projectUrl: new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required])
  })    
    }

  ngOnInit(): void {
  }

}
