import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { CustomerLogin } from '../Models/CustomerLogin';
import { user } from '../Models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  user_email:string;
  user_password:string;
  message:any;
  nas:user[]=[];

  constructor(private service: SignupService, private router:Router) { }
  

  ngOnInit(): void {
    
  }
  
  login()
  {
    
    
    var login=new CustomerLogin();

    login.user_email=this.user_email;
    login.user_password=this.user_password;
    this.service.login(login).subscribe(
      //console.log("Subsribed");
       res=>{

        if(res=='Success')
        {
          alert("logged in")
          let user_email=res.user_email;
          sessionStorage.setItem('userEmail', user_email);
          this.router.navigate(['userdashboard',login.user_email])
        }
        else
        {
          alert("Invalid Credentials")
          this.router.navigate(['signup'])
          console.log("Incorrect credentials");
        }
      }
    )
  }
 
  

}
