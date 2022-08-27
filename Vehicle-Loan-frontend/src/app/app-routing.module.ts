import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckEligibilityComponent } from './check-eligibility/check-eligibility.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
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



const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'checkeligiblity', component: CheckEligibilityComponent},
{path: 'login', component: LoginComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'signup', component: SignupComponent},
{path: 'userlogin', component: UserLoginComponent},
{path: 'adminlogin', component: AdminLoginComponent},
{path: 'emicalculator', component: EmicalculatorComponent},
{path: 'userdashboard/:id', component: UserDashboardComponent},
{path: 'loanoffer', component: LoanofferComponent},
{path: 'employmentdetails', component: EmploymentDetailsComponent},
{path: 'admindashboard/:email', component:AdminDashboardComponent},
{path: 'allapplications', component:ApplicationListComponent},
// {
//   path:'allapplications',
//   children:[
//     {
//       path:'',
//       component:ApplicationListComponent
//     },
//     {
//       path:'custappform/:id',
//       component:ParticularAppformComponent
//     }
//   ]
// },
{path: 'allclients', component:ClientListComponent},
{path: 'allrejected', component:RejectedListComponent},
{path: 'editformstatus/:id', component:EditFormstatusComponent},
{path: 'custappform/:id', component:ParticularAppformComponent},
{path:  'myformstatus/:id', component:MyformStatusComponent},
{path:  'addappstatus', component:AddFormstatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
