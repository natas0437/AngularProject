import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PortofolioModel } from '../portofolio.model';
import {PortofolioService} from '../portofolio.service';

@Component({
  selector: 'app-form-portofolio',
  templateUrl: './form-portofolio.component.html',
  styleUrls: ['./form-portofolio.component.scss']
})
export class FormPortofolioComponent implements OnInit {
  formPortofolio!: FormGroup;
  listPortofolio!: PortofolioModel;
  idPortofolio!: number;
  jenisProject: string = 'update';

  constructor(private formBuild: FormBuilder,
              private router: Router,
              private _PortofolioService: PortofolioService,
              private activatedRoute: ActivatedRoute) { 
            this.formPortofolio = this.formBuild.group({
              projectName: new FormControl(null,[Validators.required]),
              dateTheprojectWasCreated: new FormControl(null,[Validators.required]),
              projectUrl: new FormControl(null,[Validators.required]),
              description: new FormControl(null,[Validators.required])
            })    
              }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(rute => {
      this.idPortofolio = rute['id'];
    })
    
      this.jenisProject ='Update'
    }
  }


 

