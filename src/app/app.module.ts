import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuService } from './services/menuservice.service';
import {Http, HttpModule, Response, RequestOptions, Headers} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
