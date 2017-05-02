import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { AuthHttp } from "angular2-jwt/angular2-jwt";

import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import { Item } from "./item";

@Injectable()
export class ItemService 
{

  private itemUrl = "api/armory";
  constructor(private http: Http, private authHttp: AuthHttp) { }

  private headers = new Headers({"Content-Type": "application/json"});

  getArmory(): Observable<Item[]>
  {
  	return this.http.get(this.itemUrl)
  			   .map(res => res.json());
  }

  createItem(name: string, desc: string, lore: string, img: string): Promise<Item>
  {
  	return this.http
  			   .post(this.itemUrl, JSON.stringify(
  			   {
  			   	name: name,
  			   	desc: desc,
  			   	lore: lore,
  			   	img: img
  			   }),
  			   {headers: this.headers})
  			   .toPromise()
  			   .then(res => res.json().data as Item)
  			   .catch(this.handleError);
  }

	private handleError(error: any): Promise<any>
	{
		console.error("error", error);
		return Promise.reject(error.message || error);
	}

}
