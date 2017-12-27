import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'
import { MethodsService } from '../service/methods/methods.service'
import { SerService } from '../service/service/ser.service'
import { LoginPageComponent } from '../login-page/login-page.component'
  

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  showNavbar  : boolean;	
  fixed       : boolean

  constructor(@Inject(DOCUMENT) private _doc: Document, private _methodsService: MethodsService, private _serService: SerService, private _loginPageComponent: LoginPageComponent) { }

  show(val) {
  	this.showNavbar = val
  }

  ngOnInit() {
    this.showNavbar = false
    this._serService.currentLogin.subscribe(status => this.showNavbar = status)
  }

  logout() {
    this._loginPageComponent.logout()
  }
  Search(srch) {
    console.log(3234234, srch)
    // let srchParams["srch"] = srch 
    this._methodsService.postMethod('/api/searchRecipe', {"srch":srch})
    .subscribe(
        res => {
            res = res.json()
            console.log("srch res ----->", res)
            if (res.status) {
                
            }

        },
        err => {
          console.log("err ----->", err) ;       
      });
  }

  srchChange(srch) {
    console.log(3234234, srch)
    // let srchParams["srch"] = srch 
    this._methodsService.postMethod('/api/searchChange', {"srch":srch})
    .subscribe(
        res => {
            res = res.json()
            console.log("srch res ----->", res)
            if (res.status) {
                
            }

        },
        err => {
          console.log("err ----->", err) ;       
      });
  }
  // @HostListener("window: scroll", [])
  // onWindowScroll() {
    
  //   let num = this._doc.body.scrollTop;
  //   if ( num > 50 ) {
  //       this.fixed = true;
  //   }else if (this.fixed && num < 5) {
  //       this.fixed = false;
  //   }

  // }

}
