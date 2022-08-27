import { Component, OnInit } from '@angular/core';
import { allappstatus } from '../Models/allappstatus';

import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  nas:allappstatus[]=[];

  constructor(private _service:AdminService) { }

  //Method used for displaying the list of applications from the database

  ngOnInit(){
    this._service.GetAllForms().subscribe(data=>{
      this.nas=data;
      console.log(this.nas);
    });
  }
}
