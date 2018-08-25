import { Component, OnInit, HostListener } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private router: Router

  ){}

  ngOnInit(){
   
  }

scrollToTop():void{
  setTimeout(() => window.scrollTo(0,0),0);
}

@HostListener('window:resize',['$event'])
onresize(event) {}
}
