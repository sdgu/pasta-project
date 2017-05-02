import { Component, OnInit } from '@angular/core';

import { Item } from "../item";

import { ItemService } from "../item.service";

@Component({
  selector: 'app-item-submission',
  templateUrl: './item-submission.component.html',
  styleUrls: ['./item-submission.component.css']
})
export class ItemSubmissionComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  nameToAdd: string;
  descToAdd: string;
  loreToAdd: string;
  imgToAdd: string;

  createItem(): Promise<void>
  {
  	return this.itemService.createItem(this.nameToAdd, this.descToAdd, this.loreToAdd, this.imgToAdd)
  				    .then(item =>
  				    {
  				    	console.log(item);
  				    	// alert("created item");
  				    	this.nameToAdd = "";
  				    	this.descToAdd = "";
  				    	this.loreToAdd = "";
  				    	this.imgToAdd = "";
  				    })
  }


  ngOnInit() {
  }

}
