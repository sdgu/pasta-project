import { Component } from '@angular/core';
// First and foremost we'll include our authentication service
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/dashboard"></a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a routerLink="/deals" routerLinkActive="active">Deals</a>
          </li>
          <li>
            <!-- We'll only show the private deals link if the user is logged in -->
            <a routerLink="/special" *ngIf="authService.loggedIn()" routerLinkActive="active">Private Deals</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <!-- We'll show the login link if the user is not currently logged in -->
            <a (click)=authService.login() *ngIf="!authService.loggedIn()">Log In</a>
          </li>
          <li>
            <!-- On the other hand, if the user is logged in, we'll show a log out link -->
            <a (click)=authService.logout() *ngIf="authService.loggedIn()">Log Out</a>
          </li>
        </ul>
    </nav>
    <div class="col-sm-12">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles : ['.navbar-right { margin-right: 0px !important}']
})
export class AppComponent {

  title = 'Daily Deals';

  // We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
  constructor(public authService: AuthService) {}
}