//new service
import { Injectable } from '@angular/core';

@Injectable()
export class SerService {
  list : string[] = ['module', 'component', 'derective', 'services']
  
  constructor() { }

  getList() {
  	return this.list
  }

}
