import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../service/methods/methods.service';
import { Router } from '@angular/router';            //required for routing
import { SerService } from '../service/service/ser.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
	user : Object  = {}
  	constructor(private _methodsService: MethodsService, private _router: Router, private _serService: SerService) { 
  	}

  	ngOnInit() {
  		this.user = {}
  	}

  	login(user) {
      //subscribe are use with observables
      this._methodsService.postMethod ('login', user)
      .subscribe(
        res => {
            res = res.json()
            if (res.status) {
              this._serService.loggedIn(true)
              this._router.navigateByUrl('food')    
            }

        },
        err => {
          this._serService.loggedIn(false)
      });

  	}

    logout() {
      this._methodsService.getMethod ('api/logout')
      .subscribe(
        res => {
            res = res.json()
            if (res.status) {
              this._serService.loggedIn(false)
              this._router.navigateByUrl('login')    
            }

        },
        err => {
          this._serService.loggedIn(true)
      });

    }


}
