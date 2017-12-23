import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MethodsService {

	constructor(private _http: Http) { }

	postMethod (url, params) {
		return this._http.post(url, params)
	}

	getMethod (url) {
		return this._http.get(url)
	}
}
