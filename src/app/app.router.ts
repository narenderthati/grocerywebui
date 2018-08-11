import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const ROUTER: Routes = [
    {
        path:'',
        loadChildren: './common/common.module#CommonModule'
    }
    
]

export const appRouter: ModuleWithProviders = RouterModule.forRoot(ROUTER);