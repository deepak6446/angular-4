import { Injectable } from '@angular/core';
import { MethodsService } from '../methods/methods.service';

@Injectable()
export class AuthService {

  	constructor(private _methodsService: MethodsService) { }

  	public isAuthenticated(): Promise<boolean> {

	  	return new Promise((resolve) =>{
	  		this._methodsService.getMethod ('/user/session')
			.subscribe(
				res => {
			    	res = res.json()
			      	console.log("res session ----->", res)
			      	if (res.status) {
			       		return resolve(true) 
			      	}else return resolve(false)

			  	},
			  	err => {
			    	// console.log("err ----->", err) ;
			    	return resolve(false)       
			});
		});
  	}
}
