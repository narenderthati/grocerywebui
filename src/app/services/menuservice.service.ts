import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs' ;
import { Menu} from '../modal/menu';


@Injectable()
export class MenuService {
[x: string]: any;
  constructor(private http: Http) {}

  private menuUrl = 'http://localhost:8080/menu';

  getMenu(): Promise<Menu[]>{
    return this.http.get(this.menuUrl)
    .toPromise()
    .then(response => response.json() as Menu[])
    .catch(this.handleError);
    
  }
private handleError(error: any): Promise<any>{
  console.error('Error',error);
  return Promise.reject(error.message || error);
}

}
