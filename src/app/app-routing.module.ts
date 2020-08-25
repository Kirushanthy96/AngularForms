import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateFormComponent} from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormstypeComponent } from './formstype/formstype.component';

const routes: Routes = [
  {path:"",component:FormstypeComponent},
  {path:"templateForm" ,component:TemplateFormComponent},
   { path:'reactiveForm',component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
