import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DailyoffersComponent } from './dailyoffers/dailyoffers.component';

export const ROUTER: Routes = [
    {
        path:'',
        loadChildren:'app/grocery/grocery.module#GroceryModule'
    },
    {
        path:'dailyoffers',
        component: DailyoffersComponent
    }/*,
    {
        path:'restaurant',
        loadChildren:''
    },
    {
        path:'events',
        loadChildren:''
    },
    {
        path:'contactus',
        component:''
    },
    {
        path:'aboutus',
        component:''
    },
    {
        
    }*/



];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(ROUTER);
