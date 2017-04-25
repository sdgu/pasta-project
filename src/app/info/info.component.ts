import { Component, OnInit } from '@angular/core';

import { Info } from "../info";

import { InfoService } from "../info.service";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [InfoService]
})
export class InfoComponent implements OnInit {

	charsInfo: Info[];
	mode = "Observable";

  constructor(private infoService: InfoService, public authService: AuthService) { }

  getCharsInfo(): void
  {
  	this.infoService.getCharsInfo()
  					.subscribe(info => 
  					{
  						this.charsInfo = info;
  					})
  }

  ngOnInit() 
  {
  	if (this.authService.loggedIn())
  	{
  		this.getCharsInfo();
  	}
  	
  }

}
