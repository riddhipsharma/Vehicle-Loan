import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStatus } from '../Models/AppStatus';
import { user } from '../Models/user';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  users: user = {
    user_id: 0,
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
    user_password: ""
  }; //container

  nas: AppStatus[] = [];

  id: string;
  uid: number;
  constructor(private _service: SignupService, private activerout: ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activerout.snapshot.params["id"]; //route variable
    this.id = this.activerout.snapshot.params["id"];
    console.log("id = " + this.id);
    this._service.GetProfile(this.id).subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
