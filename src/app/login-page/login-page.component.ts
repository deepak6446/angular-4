import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../service/methods/methods.service';
import { Router } from '@angular/router';            //required for routing

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
	user : Object  = {}
  	constructor(private _methodsService: MethodsService, private _router: Router) { 
  		// this._methodsService.getMethod()
  		// .subscribe(res => { 
    //      console.log("_________ res", res.json())
    //   });
  	}

  	ngOnInit() {
  		this.user = {}
  	}

  	login(user) {

      this._methodsService.postMethod ('login', user)  //subscribe are use with observables
      .subscribe(
        res => {
            res = res.json()
            console.log("res ----->", res)
            if (res.status) {
              console.log("dfsdfsd, login")
              this._router.navigateByUrl('food')    
            }

        },
        err => {
          console.log("err ----->", err) ;       
      });

  	}

}
