import { Component, OnInit } from '@angular/core';
import { freeSet } from '@coreui/icons';
import {PortofolioTrainerModel} from "../portofolio-trainer.model";
@Component({
  selector: 'app-list-trainer',
  templateUrl: './list-trainer.component.html',
  styleUrls: ['./list-trainer.component.scss']
})
export class ListTrainerComponent implements OnInit {

  ListTrainer :PortofolioTrainerModel [] = [];
  icons = freeSet ;
  constructor() { }

  ngOnInit(): void {
  }

}