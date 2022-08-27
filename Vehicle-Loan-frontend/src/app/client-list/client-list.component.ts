import { Component, OnInit } from '@angular/core';
import { user } from '../Models/user';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  users:user[]=[];

  constructor(private _service:AdminService) { }

  // Method in which the object is fetching data from service to the client information from the database

  ngOnInit(){
    this._service.GetAllClients().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    });
  }

}
