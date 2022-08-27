import { Component, OnInit } from '@angular/core';
import { administratorLogin } from '../Models/administratorLogin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  ad:administratorLogin[]=[];

  constructor(private _service:AdminService) { }

  // Method in which the object is fetching data from service to display on webpage

  ngOnInit(){
    this._service.GetAdminDetails().subscribe(data=>{
      this.ad=data;
      console.log(this.ad);
    });
  }

}
