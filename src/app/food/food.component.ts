import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

	foodList : String[] = ['d', 'f', 'd', 'e']
	constructor() { }

	ngOnInit() {
  	}

}
