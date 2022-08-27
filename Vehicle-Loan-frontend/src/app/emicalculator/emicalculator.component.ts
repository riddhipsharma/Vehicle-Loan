import { Component } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent {

  loanAmount!: number;
  tenure!: number;
  interest: number= 10;  
  emi!: number;

  //  logic for calculating the emi amount

  cal() {
    var outstandingAmount =
      Number(this.loanAmount) +
      Number(this.loanAmount * (this.interest / 100) * this.tenure);
    this.emi = Math.floor(outstandingAmount / this.tenure);
  }
}


