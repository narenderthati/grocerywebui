import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuService } from './header/services/menuservice.service';
import {Http, HttpModule, Response, RequestOptions, Headers} from '@angular/http';
import { appRouter} from './app.router';
import { BannerComponent } from './banner/banner.component';
import { DailyoffersComponent } from './dailyoffers/dailyoffers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    DailyoffersComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouter
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
