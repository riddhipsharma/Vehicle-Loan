import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CheckEligibilityComponent } from './check-eligibility/check-eligibility.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { LoanofferComponent } from './loanoffer/loanoffer.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { RejectedListComponent } from './rejected-list/rejected-list.component';
import { EditFormstatusComponent } from './edit-formstatus/edit-formstatus.component';
import { ParticularAppformComponent } from './particular-appform/particular-appform.component';
import { MyformStatusComponent } from './myform-status/myform-status.component';
import { AddFormstatusComponent } from './add-formstatus/add-formstatus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    CheckEligibilityComponent,
    LoginComponent,
    AboutusComponent,
    SignupComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserDashboardComponent,
    EmicalculatorComponent,
    LoanofferComponent,
    EmploymentDetailsComponent,
    AdminDashboardComponent,
    ApplicationListComponent,
    ClientListComponent,
    RejectedListComponent,
    EditFormstatusComponent,
    ParticularAppformComponent,
    MyformStatusComponent,
    AddFormstatusComponent 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
