import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AppStatus } from '../Models/AppStatus';
import { CustomerAppForm } from '../Models/CustomerAppForm';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = "http://localhost:22508/api/Admin";
  url1: string = "http://localhost:22508/api/Admin/AllCustomerAppForm";
  url3: string = "http://localhost:22508/api/Admin/ApplicationStatus";
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  GetAdminDetails(): Observable<any> {
    return this.http.get<any>(this.url + "/AdminDetails");
  }

  GetAllClients(): Observable<any> {
    return this.http.get<any>(this.url + "/AllClients");
  }

  GetAllRejected(): Observable<any> {
    return this.http.get<any>(this.url + "/ApplicationStatus/Rejected");
  }

  GetAllForms(): Observable<any> {
    return this.http.get<any>(this.url1);
  }

  AddApplicationStatus(app: AppStatus) {
    return this.http.post(this.url3, app, { responseType: 'text' });
  }

  // GetAllNa():Observable<any>{
  //   return this.http.get<any>(this.url+"/ApplicationStatus/NA");
  // }


  // GetApplicationForm():Observable<any>{/ApplicationForm/801
  //   return this.http.get<any>(`${this.url}/ApplicationForm/${id}`);
  // }


  // CustAppForm(id:Number):Observable<any>{
  //   return this.http.get(this.url +'/CustomerAppForm/'+id).pipe(
  //     map((cust:any)=>cust)
  //   );
  // }

  GetCustAppForm(id: Number): Observable<any> {
    return this.http.get(`${this.url}/CustomerAppForm/${id}`);
  }

  GetAdminProfile(email: string): Observable<any> {
    return this.http.get(`${this.url}/AdminProfile/${email}`);
  }

  GetStatus(id: Number): Observable<any> {
    return this.http.get(`${this.url}/ApplicationFormStatus/${id}`);
  }

  UpdateFormStatus(status: AppStatus): Observable<any> {
    return this.http.put<any>(this.url + '/UpdateStatus/' + status.status_id, status, this.httpOptions).pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
