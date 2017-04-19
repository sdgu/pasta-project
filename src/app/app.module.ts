import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';

import {routing, routedComponents} from "./app.routing";

import { DealService} from "./deal.service";
import { AuthService } from "./auth.service";
import { PublicDealsComponent} from "./public-deals/public-deals.component";
import { PrivateDealsComponent } from './private-deals/private-deals.component';

import { AuthGuard } from "./auth-guard.service";

import { AuthHttp, AuthConfig } from "angular2-jwt";

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { UserListComponent } from "./user-list/user-list.component";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
          tokenGetter: (() => localStorage.getItem('id_token')),
          globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    routedComponents
    // PublicDealsComponent
    // PrivateDealsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DealService, 
  
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
