import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const GROCERY_ROUTER: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    
];

export const groceryRouter = RouterModule.forChild(GROCERY_ROUTER);