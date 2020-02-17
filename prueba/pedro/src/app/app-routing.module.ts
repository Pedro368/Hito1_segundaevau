import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent } from 'src/app/aboutus/aboutus.component';

const routes: Routes = [
  { path:'employeemanager', loadChildren:'./employeemanager/employeemanager.module#EmployeemanagerModule'},
  { path:'demo', loadChildren:'./demo/demo.module#DemoModule'},
  { path: '**', redirectTo: 'employeemanager'},
  { path: 'employeemanager/aboutus', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
