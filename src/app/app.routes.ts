import { Routes } from '@angular/router';
import { Login } from './+public/+pages/login/login';
import { Privatetemplet } from './+private/+pages/privatetemplet/privatetemplet';
import { privateGuard } from './private-guard';
import { Dashboard } from './+private/+pages/dashboard/dashboard';
import { Books } from './+private/+pages/books/books';
import { Members } from './+private/+pages/members/members';
import { Borrows } from './+private/+pages/borrows/borrows';
import { Reports } from './+private/+pages/reports/reports';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'private',canActivate:[privateGuard],component:Privatetemplet,children:[
        {path:'dashboard',component:Dashboard},
        {path:'books',component:Books},
        {path:'members',component:Members},
        {path:'borrows',component:Borrows},
        {path:'reports',component:Reports},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'},
            ]},
 {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
     
];
