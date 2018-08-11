import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyoffersComponent } from './dailyoffers/dailyoffers.component';
import { ContactusComponent } from './contactus/contactus.component';

const COMMON_ROUTER: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'dailyoffers',
        component: DailyoffersComponent
    },
    {
        path:'contactus',
        component: ContactusComponent
    }
    
];

export const commonRouter =  RouterModule.forChild(COMMON_ROUTER)
