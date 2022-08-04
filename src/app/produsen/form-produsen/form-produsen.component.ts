import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProdusenService} from "../produsen.service";
import {ProdusenModel} from "../produsen.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-produsen',
  templateUrl: './form-produsen.component.html',
  styleUrls: ['./form-produsen.component.css']
})
export class FormProdusenComponent implements OnInit {

  formProdusen!: FormGroup;

  constructor(private formBuild: FormBuilder,
              private _produsenService: ProdusenService,
              private router: Router) {
    this.formProdusen = formBuild.group({
      'nama': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'kode': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'alamat': new FormControl(null, [Validators.required]),

    })
  }

  ngOnInit(): void {
  }

  save() {
    let produsen: ProdusenModel = new ProdusenModel();
    produsen = this.formProdusen.value;

    this._produsenService.create(produsen).subscribe(response => {
      if (response.status === 200) {
        console.log(response.body);
        this.router.navigate(['/', 'produsen'])
      } else {
        alert("Gagal Menyimpan Data");
        console.log(response.body)
      }
    })
  }

}
