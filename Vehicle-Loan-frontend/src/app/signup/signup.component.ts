import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { SignupService } from '../services/Signup.service';

import { user } from '../Models/user';
import { SignupService } from '../services/signup.service';
//import { SignupService } from '../services/Signup.service';
//import { FormControl,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent   {

  constructor (private _service:SignupService,private router:Router){}

  // ngOnInit(): void {
    
  // }


  onSubmit(registerform:any)
  {
    this._service.AddRegistration(registerform).subscribe(data=>
      {alert("Registered successfully! Proceed to login page.");
      this.router.navigate(['/login'])
        console.log("data : "+ registerform);
    });
  }

}


