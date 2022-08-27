import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStatus } from '../Models/AppStatus';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-formstatus',
  templateUrl: './edit-formstatus.component.html',
  styleUrls: ['./edit-formstatus.component.css']
})
export class EditFormstatusComponent implements OnInit {

  user:AppStatus={status_id:0,user_ref_id:0,application_id:0,admin_ref_id:0,application_status:"",rejection_reason:""}; //container

  id:Number | undefined;
  constructor(private _service:AdminService,private activerout:ActivatedRoute,private router:Router) { }

  // Method in which the object is fetching data from service to get the information of the applicant's status

  ngOnInit(): void {
    const tid=this.activerout.snapshot.params["id"]; //route variable
    this.id=Number(tid);
    console.log("id = "+this.id);
    this._service.GetStatus(this.id).subscribe(data=>{
      this.user=data;
      console.log(this.user);
      // alert("Verified");
    });
  }

  // Method used for updating the information of the user's application form

  onSubmit(user:any){
    this._service.UpdateFormStatus(this.user).subscribe(
      ()=>{
        alert("Verified");
        this.router.navigate(["/allapplications"]);
        console.log(this.user);
      }
    )
  }

}
