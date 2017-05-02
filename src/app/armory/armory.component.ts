import { Component, OnInit } from '@angular/core';

import { ItemService } from "../item.service";
import { Item } from "../item";

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css']
})
export class ArmoryComponent implements OnInit {

  constructor(private itemService: ItemService) { }


  items: Item[];
  mode = "Observable";

  selectedItem: Item;

  getArmory(): void
  {
  	this.itemService.getArmory()
  						 .subscribe(items =>
  						 {
  						 	this.items = items;
  						 })

  	// let test: Item = 
  	// {
  	// 	name: "Wooden sword",
  	// 	desc: "What do you think.",
  	// 	lore: "lol",
  	// 	img: "none"		  		
  	// }

  	// this.items = [test]

  }

  view(item: Item): void
  {
  	this.selectedItem = item;
  }

  ngOnInit() 
  {
  	this.getArmory();


  }

}
