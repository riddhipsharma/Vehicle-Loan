import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-eligibility',
  templateUrl: './check-eligibility.component.html',
  styleUrls: ['./check-eligibility.component.css']
})
export class CheckEligibilityComponent {
  constructor(private router: Router) { }

  // elig: boolean = false;
  stat!: string;
  onroadprice!: number;
  monthlysavings!: number;
  existingemi!: number;
  loantenure!: number;
  newemi: number = this.onroadprice / this.loantenure;

  //  logic for checking eligibity for user to apply loan

  checkeligiblity() {
    if (((this.onroadprice / this.loantenure) + this.existingemi) <= this.monthlysavings) {
      // if(this.elig==false)
      // {
      this.stat = "USER IS ELIGIBLE!";
      alert(this.stat);
      this.router.navigate(['loanoffer'])
      }
    // }
    else {
      this.stat = "SORRY, YOU AREN'T ELIGIBLE!";
      alert(this.stat);
      window.location.reload();
    }
  }


}
