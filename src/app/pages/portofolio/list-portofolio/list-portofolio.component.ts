import { Component, OnInit } from '@angular/core';
import { PortofolioModel } from "../portofolio.model";
import {freeSet} from "@coreui/icons";

@Component({
  selector: 'app-list-portofolio',
  templateUrl: './list-portofolio.component.html',
  styleUrls: ['./list-portofolio.component.scss']
})
export class ListPortofolioComponent implements OnInit {

  listPortofolio: PortofolioModel[] = [];
  icons = freeSet ;
  constructor() {

   } 

  ngOnInit(): void {

  }

}
