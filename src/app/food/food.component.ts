import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
	recipe 		: String[] = ['Rogan Josh', 'Chicken Tikka Masala', 'Malai Kofta', 'Chole (Chickpea Curry)']
	foodList 	: String[] = ['d', 'f', 'd', 'e']

	constructor() { }

	ngOnInit() {
  	}

}
