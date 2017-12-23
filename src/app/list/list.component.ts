//new component
import { Component, OnInit } from '@angular/core';
import { SerService } from '../service/service/ser.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title    : string = 'data from child component'
  list     : string[]
  ingredients : string[]
  related : string[]
  trendingUser : string[];
  user     : string = "attribute directive ngModel"
  id       : string
  name     : string

  constructor( private _list: SerService, private _route: ActivatedRoute) {    //getting variables from ser service
    this.list   = _list.getList()                // 
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id   = params.id
      this.name = params.name
    });
    this.trendingUser    = ['sd','sdf','sdfsd']
    this.related         = ['sd','sdf','sdfsd']
    this.ingredients     = ['dfdffdfdsfsdf', 'asfdfdfsdf' , 'asfdfdfsdf' , 'asfdfdfsdf']
  }

  onSelect(){
  	console.log("selected")	
  }



}
