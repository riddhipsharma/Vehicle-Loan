import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStatus } from '../Models/AppStatus';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-myform-status',
  templateUrl: './myform-status.component.html',
  styleUrls: ['./myform-status.component.css']
})
export class MyformStatusComponent implements OnInit {

  cust:AppStatus={
    status_id:0,
    user_ref_id:0,
    application_id:0,
    admin_ref_id:0,
    application_status: "Null",
    rejection_reason: "Null"
  };

  //Method used for finding out the status of the applicant

  id:Number;
  constructor(private _service:SignupService,private activerout:ActivatedRoute) { }

  ngOnInit(): void {
    const tid=this.activerout.snapshot.params["id"]; //route variable
    this.id=this.activerout.snapshot.params["id"];
    console.log("id = "+this.id);
    this._service.GetMyFormStatus(this.id).subscribe(data=>{
      this.cust=data;
      console.log(this.cust=data);
    });
  }

}
