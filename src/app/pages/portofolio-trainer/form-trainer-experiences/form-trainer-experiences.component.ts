import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-trainer-experiences',
  templateUrl: './form-trainer-experiences.component.html',
  styleUrls: ['./form-trainer-experiences.component.scss']
})
export class FormTrainerExperiencesComponent implements OnInit {

  formTrainerExperiences!: FormGroup;
  
  constructor(private formBuild: FormBuilder,
    private router: Router) { 
      this.formTrainerExperiences = this.formBuild.group({
        'companyName': new FormControl(null, [Validators.required]),
        'startDate': new FormControl(null, [Validators.required]),
        'endDate': new FormControl(null, [Validators.required]),
        'posision': new FormControl(null, [Validators.required]),
        'description': new FormControl(null, [Validators.required])
      })
    }


  ngOnInit(): void {
  }

}
