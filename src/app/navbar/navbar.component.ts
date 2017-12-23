import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  showNavbar  : boolean;	
  fixed       : boolean

  constructor(@Inject(DOCUMENT) private _doc: Document) { this.showNavbar = false }

  show(val) {
  	this.showNavbar = val
  }

  ngOnInit() {
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
