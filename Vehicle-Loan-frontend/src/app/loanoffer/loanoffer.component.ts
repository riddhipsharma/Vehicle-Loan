import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../Models/Loan';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-loanoffer',
  templateUrl: './loanoffer.component.html',
  styleUrls: ['./loanoffer.component.css']
})
export class LoanofferComponent implements OnInit {

  constructor(private loanservice:SignupService,private router:Router) { }
 
  // Method for submitting loan offer that is posting loan offer data submitting by user into database and navigating it to next page

  onSubmit(appform:Loan)
  {
    this.loanservice.AddLoanDetails(appform).subscribe(data=>
      {
        console.log("data:"+appform);
        alert("Applied For Loan Offer!")
        this.router.navigate(["/employmentdetails"]);

      });
  }
  ngOnInit(): void {
  }

}
