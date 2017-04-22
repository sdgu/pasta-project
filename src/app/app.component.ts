import { Component } from '@angular/core';
// First and foremost we'll include our authentication service
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  // We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
  constructor(public authService: AuthService) {}
}