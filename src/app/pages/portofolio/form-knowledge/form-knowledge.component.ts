import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-form-knowledge',
  templateUrl: './form-knowledge.component.html',
  styleUrls: ['./form-knowledge.component.scss']
})
export class FormKnowledgeComponent implements OnInit {

  formKnowledge!: FormGroup;
  
  constructor(private formBuild: FormBuilder,
    private router: Router) { 
      this.formKnowledge = this.formBuild.group({
        'myKnowledge': new FormControl(null, [Validators.required])
      })
    }

  ngOnInit(): void {
  }

}
