//new component
import { Component, OnInit } from '@angular/core';
import { SerService } from '../service/service/ser.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title : string = 'data from child component'
  list : string[];
  user : string = "attribute directive ngModel"
  constructor( private _list: SerService) {    //getting variables from ser service
    this.list = _list.getList()                // 
  }

  ngOnInit() {
  }

  onSelect(){
  	console.log("selected")	
  }

}
