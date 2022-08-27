import { Component, OnInit } from '@angular/core';
import { AppStatus } from '../Models/AppStatus';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-rejected-list',
  templateUrl: './rejected-list.component.html',
  styleUrls: ['./rejected-list.component.css']
})
export class RejectedListComponent implements OnInit {

  rejects:AppStatus[]=[];

  constructor(private _service:AdminService) { }

  //Method for getting the details of all the rejected application forms

  ngOnInit(){
    this._service.GetAllRejected().subscribe(data=>{
      this.rejects=data;
      console.log(this.rejects);
    });
  }


}
