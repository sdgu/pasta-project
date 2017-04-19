import { Component, OnInit } from '@angular/core';
import { AuthHttp } from "angular2-jwt";
import { Http, HttpModule } from "@angular/http";
import "rxjs/add/operator/map";

interface User
{
	id: number,
	name: string
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	users: User[];
  constructor(private http: Http, private authHttp: AuthHttp) { }

  ngOnInit() {

  	this.http.get("api/users")
  				 .map(res => res.json())
  				 .subscribe(
  				 	users => this.users = users,
  				 	error => console.log(error))

  }

}
