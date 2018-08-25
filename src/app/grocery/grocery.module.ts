import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { groceryRouter} from './grocery.router';


@NgModule({
  imports: [
    CommonModule,
    groceryRouter
  ],
  declarations: [HomeComponent]
})
export class GroceryModule { }
