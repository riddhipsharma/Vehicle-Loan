import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Models/Employee';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {

  constructor(private _service:SignupService,private router:Router) { }
 
  ngOnInit(){
  }
  
    // Method for submitting an application form that is posting application form data submitting by user into database

  onSubmit(appform:Employee)
  {
    this._service.AddApplicationDetails(appform).subscribe(data=>
      {console.log("data : "+ appform);
      alert("Application Form Submitted Successfully!")
      this.router.navigate(["/login"]);
    });
  }

}
