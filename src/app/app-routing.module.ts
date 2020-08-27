import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateFormComponent} from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormstypeComponent } from './formstype/formstype.component';
import { SchoolComponent } from './school/school.component';
import { ClassAComponent } from './class-a/class-a.component';
import { ClassBComponent } from './class-b/class-b.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"",component:FormstypeComponent,pathMatch:"full"},
  {path:"templateForm" ,component:TemplateFormComponent},
   { path:'reactiveForm',component:ReactiveFormComponent},
   {path:'school',component:SchoolComponent , children:[
     {path:'classa',component:ClassAComponent},
     {path:'classa/classa/:id',component:StudentsComponent},
     {path:'classb',component:ClassBComponent},
     {path:'classb/classb/:id',component:StudentsComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
