import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()   
export class AuthguardService implements CanActivate{//new service which implements the route guard.

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): Observable<boolean> | boolean{
	
	var subject = new Subject<boolean>();

	this.auth.isAuthenticated().then((status) => {
		if (!status) {
		   this.router.navigateByUrl('login') 
		   subject.next(false);
		}	
		else subject.next(true);;
	})
	return subject.asObservable();
	
  }
}
