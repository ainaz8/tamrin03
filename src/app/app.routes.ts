import { Routes } from '@angular/router';
import { Login } from './+public/+pages/login/login';
import { Privatetemplet } from './+private/+pages/privatetemplet/privatetemplet';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'private',component:Privatetemplet,children:[


    ]},
 {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
         
    
    
];
