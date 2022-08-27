import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CustomerLogin } from '../Models/CustomerLogin';
import { administratorLogin } from '../Models/administratorLogin';
import { Employee } from '../Models/Employee';
import { user } from '../Models/user';
import { Loan } from '../Models/Loan';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }


  url1: string = "http://localhost:22508/api/Registration";
  url: string = "http://localhost:22508/api/Customer";
  url2: string = "http://localhost:22508/api/Customer/ApplicationForm";
  url3: string = "http://localhost:22508/api/Admin"

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };

  AddRegistration(reg: any) {
    return this.http.post(this.url1 + '/Register', reg, { responseType: 'text' });
  }

  login(login: CustomerLogin): Observable<any> {
    return this.http.post(this.url1 + '/Login', login, { responseType: 'text' })
  }

  addAdminLogin(login: administratorLogin): Observable<any> {
    return this.http.post(this.url1 + '/AdminLogin', login, { responseType: 'text' })
  }

  AddApplicationDetails(app: Employee) {
    return this.http.post(this.url2, app, { responseType: 'text' });
  }

  AddLoanDetails(app: Loan) {
    return this.http.post("http://localhost:22508/api/Customer/LoanOffer", app, { responseType: 'text' });
  }

  GetProfile(email: string): Observable<any> {
    return this.http.get(`${this.url}/UserProfile/${email}`);
  }

  GetMyFormStatus(id: Number): Observable<any> {
    return this.http.get(`${this.url3}/ApplicationFormStatus/${id}`);
  }

  // UpdateProfile(status:user):Observable<any>{
  //   return this.http.put<any>(this.url+'/UpdateProfile/'+status.user_email,status,this.httpOptions).pipe(catchError(this.handleError))
  // }

  // handleError(error:HttpErrorResponse){
  //   let errorMessage="";
  //   errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
  //   alert(errorMessage);
  //   return throwError(errorMessage);
  // }

}