import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { AuthHttp } from "angular2-jwt/angular2-jwt";

import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import { Info } from "./info";

@Injectable()
export class InfoService 
{

  private infoUrl = "api/characterInfo";
  constructor(private http: Http, private authHttp: AuthHttp) { }

  private headers = new Headers({"Content-Type": "application/json"});

  getCharsInfo(): Observable<Info[]>
  {
  	return this.authHttp.get(this.infoUrl)
  			   .map(res => res.json());
  }


	private handleError(error: any): Promise<any>
	{
		console.error("error", error);
		return Promise.reject(error.message || error);
	}

}
