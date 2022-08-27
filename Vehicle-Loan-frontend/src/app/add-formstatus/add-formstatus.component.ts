import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStatus } from '../Models/AppStatus';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-formstatus',
  templateUrl: './add-formstatus.component.html',
  styleUrls: ['./add-formstatus.component.css']
})
export class AddFormstatusComponent implements OnInit {

  constructor(private _service:AdminService,private router:Router) { }
 
  ngOnInit(){
  }

  // Method for finding out the status of the applicant to check whether he is eligible for the loan
  
  onSubmit(appform:AppStatus)
  {
    this._service.AddApplicationStatus(appform).subscribe(data=>
      {console.log("data : "+ appform);
      alert("Application Form Status Submitted Successfully!")
      this.router.navigate(["/allapplications"]);
    });
  }

}
