import { Component,  } from '@angular/core';
import { administratorLogin } from '../Models/administratorLogin';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  // declaring properties
  admin_email:string | undefined
  admin_password:string | undefined
  message:any
  
  constructor(private service: SignupService, private router:Router) { }
  

  ngOnInit(): void {
    
  }
  
  //Method which is used to help the admin login into the webpage

  login()
  {
    
    
    var login=new administratorLogin();

    login.admin_email=this.admin_email;
    login.admin_password=this.admin_password;
    this.service.addAdminLogin(login).subscribe(
      //console.log("Subsribed");
       res=>{

        if(res=='Success')
        {
          alert("logged in")

          let admin_email=res.admin_email;


          sessionStorage.setItem('userEmail', admin_email);

          this.router.navigate(['admindashboard',this.admin_email])
        }
        else
        {
          alert("Invalid Credentials")
          //this.message=user.message
          this.router.navigate(['pagenotfound'])
          console.log("Incorrect credentials");
        }
      }
    )
    // else{
    //   console.log("Unsubscribed");
    // }
  }

  

}
