import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators, NgForm } from '@angular/forms';
//import { Router } from '../../../node_modules/@angular/router';
import {SearchProductService} from '../common/services/searchproduct.service';

import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  searchProductFrom: FormGroup;
  searchResult  =[];

  constructor(
    private fb: FormBuilder,
    private searchProductService: SearchProductService
  ) {
    this.groupForms();
    this.searchProductFrom.get('searchProduct').valueChanges.pipe(debounceTime(500),distinctUntilChanged()).subscribe(
      data => {
        this.searchProductService.searchProduct(data).subscribe(response => {this.searchResult = response; console.log("suggestions");console.log(this.searchResult)})
      }
    );
  }

  ngOnInit():void {

  }

groupForms(){
  this.searchProductFrom = this.fb.group({
    searchProduct: [{value:'', disabled:''},Validators.required]
  });
 // onsubmit(NgForm)
}


}
