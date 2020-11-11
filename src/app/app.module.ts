import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { RouterModule } from '@angular/router';
import { AllFormsComponent } from './all-forms/all-forms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { SurveyService } from './Survey.service';

@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    AllFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'myform',
        component: MyformComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'all-forms',
        component: AllFormsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  }

