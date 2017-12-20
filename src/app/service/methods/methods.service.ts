import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MethodsService {

	constructor(private _http: Http) { }

	getMethod(){
		return this._http.get("/api/users", function(err, data){
			console.log("------->", err, data)
		})
	}


}
