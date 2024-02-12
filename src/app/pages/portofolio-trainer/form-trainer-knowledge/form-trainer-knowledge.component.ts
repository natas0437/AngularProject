import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-trainer-knowledge',
  templateUrl: './form-trainer-knowledge.component.html',
  styleUrls: ['./form-trainer-knowledge.component.scss']
})
export class FormTrainerKnowledgeComponent implements OnInit {

  formTrainerKnowledge!: FormGroup;
  
  constructor(private formBuild: FormBuilder,
    private router: Router) { 
      this.formTrainerKnowledge = this.formBuild.group({
        'myKnowledge': new FormControl(null, [Validators.required])
      })
    }

  ngOnInit(): void {
  }

}
