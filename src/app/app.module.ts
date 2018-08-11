import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuService } from './header/services/menuservice.service';
import { SearchProductService} from './common/services/searchproduct.service';
import { HttpClientModule } from '@angular/common/http'
import { appRouter } from './app.router';
import { BannerComponent } from './banner/banner.component';
import { MatFormFieldModule,MatAutocompleteModule,MatInputModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
    
   
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    appRouter,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
   
  ],
  providers: [MenuService,SearchProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
