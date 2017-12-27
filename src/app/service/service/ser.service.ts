//new service
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';  //for sharing data between components


@Injectable()
export class SerService {
  
  list : string[] = ['module', 'component', 'derective', 'services']
  private isLogin = new BehaviorSubject<boolean>(false);
  currentLogin = this.isLogin.asObservable(); 
  constructor() { }

  getList() {
  	return this.list
  }

  loggedIn(status) {
  	this.isLogin.next(status)
  }

}
