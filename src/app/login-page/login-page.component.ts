import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../service/methods/methods.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
	user : Object  = {}
  	constructor(private _methodsService: MethodsService) { 
  		this._methodsService.getMethod()
  		.subscribe(res => { 
         console.log("_________ res", res.json())
      });
  	}

  	ngOnInit() {
  		this.user = {}
  	}

  	login(user) {
  		console.log("login", user)

  	}

}
