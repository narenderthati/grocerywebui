import { NgModule } from '@angular/core';
import { commonRouter } from './common.router';
import { HomeComponent } from './home/home.component';
import { DailyoffersComponent} from './dailyoffers/dailyoffers.component';
import { ContactusComponent } from './contactus/contactus.component'

@NgModule({
  imports: [
    commonRouter
  ],
  exports: [],
  declarations: [HomeComponent,DailyoffersComponent, ContactusComponent],
  providers: []
})
export class CommonModule { }
