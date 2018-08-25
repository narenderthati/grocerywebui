import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs' ;
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../environments/endpoints';


@Injectable()
export class SearchProductService {

  constructor(private http: HttpClient) {}
  
  searchProduct(key: string): Observable<any>{
    return this.http.get(`${endpoints.search_product}?key=${ key }`);
  }
}