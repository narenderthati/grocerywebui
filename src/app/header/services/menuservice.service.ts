import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs' ;
import { Menu} from '../modal/menu';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../environments/endpoints';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) {}
  
  getMenu(): Observable<Menu[]>{
    return this.http.get<Menu[]>(`${endpoints.gwa_appmenu}`);
  }
}