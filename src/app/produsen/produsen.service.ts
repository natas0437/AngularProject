import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ProdusenModel } from './produsen.model';
import { environment } from 'src/environments/environment';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdusenService {

  constructor(private http: HttpClient) { 

  }

  findid(id: number){
    return this.http.get<ProdusenModel>(`${environment.baseUrl}/produsen/${id}`);
  }

  list() {
    return this.http.get<ProdusenModel[]>(`${environment.baseUrl}/produsen`);
  }

  create(value: ProdusenModel){
    return this.http.post(`${environment.baseUrl}/produsen/create`, value, {observe: "response"})
  }

  update(value: ProdusenModel) {
    return this.http.put(`${environment.baseUrl}/produsen/update`, value, {observe: "response"})
  }

  delete(id : number) {
    return this.http.delete(`${environment.baseUrl}/produsen/delete/${id}`, {observe: "response"})
  }
}
