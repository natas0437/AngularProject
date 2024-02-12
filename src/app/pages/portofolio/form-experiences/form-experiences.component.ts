import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-experiences',
  templateUrl: './form-experiences.component.html',
  styleUrls: ['./form-experiences.component.scss']
})
export class FormExperiencesComponent implements OnInit {

  formExperiences!: FormGroup;
  
  constructor(private formBuild: FormBuilder,
    private router: Router) { 
      this.formExperiences = this.formBuild.group({
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
