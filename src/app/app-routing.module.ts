import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { AllFormsComponent } from './all-forms/all-forms.component';



const routes: Routes = [
  {//the survey and result paths
    path: 'all-forms',
        component: AllFormsComponent
},
{
  path: 'myform',
  component: MyformComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AllFormsComponent, MyformComponent];