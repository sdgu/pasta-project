import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [AuthService]
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  login()
  {
  	this.authService.login();
  }

  logout()
  {
  	this.authService.logout();
  }

  ngOnInit() {
  }

}
