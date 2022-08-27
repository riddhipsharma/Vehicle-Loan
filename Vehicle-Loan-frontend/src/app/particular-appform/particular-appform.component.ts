import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { CustomerAppForm } from 'src/app/Models/CustomerAppForm';

import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-particular-appform',
  templateUrl: './particular-appform.component.html',
  styleUrls: ['./particular-appform.component.css']
})
export class ParticularAppformComponent implements OnInit {

  cust:CustomerAppForm={
    user_id:0,
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_phonenum: 0,
    user_dob: new Date,
    user_gender: "",
    user_address: "",
    user_city: "",
    user_state: "",
    user_pincode: "",

    application_id:0,
    vehicle_make: "",
    vehicle_model: "",
    vehicle_type: "",
    showroom_price: 0,
    on_road_price: 0,
    type_of_emp: "",
    annual_sal: 0,
    existing_emi: "",
    amount: 0,
    duration: 0,
    interest: 0,
    application_date: new Date,
    upload_aadhar: "",
    upload_pan: "",
    upload_photo: "",
    upload_salary_slip: "",

    application_status: "",
    rejection_reason: ""
  };


  id:Number;
  constructor(private _service:AdminService,private activerout:ActivatedRoute) { }

  //Method for getting the details of the user application form

  ngOnInit(): void {
    const tid=this.activerout.snapshot.params["id"]; //route variable
    this.id=this.activerout.snapshot.params["id"];
    console.log("id = "+this.id);
    this._service.GetCustAppForm(this.id).subscribe(data=>{
      this.cust=data[0];
      console.log(this.cust=data[0]);
    });
  }

  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  // }

  // CustomAppForm(id:Number): void {
  //   this._service.CustAppForm(id).subscribe(data=>{
  //     this.ad=data;
  //     console.log(this.ad);
  //   });
  //}

}
