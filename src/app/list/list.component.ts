//new component
import { Component, OnInit } from '@angular/core';
import { SerService } from '../service/service/ser.service'
import { ActivatedRoute } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title        : string = 'data from child component'
  list         : string[]
  // ingredients : string[]
  related      : string[]
  trendingUser : string[];
  user         : string = "attribute directive ngModel"
  id           : string
  name         : string
  recipeData   : object = {}
  comments     : Array<Object> = []

  constructor( private _list: SerService, private _route: ActivatedRoute, private sanitizer: DomSanitizer) {    //getting variables from ser service
    this.list   = _list.getList()                // 
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id   = params.id
      this.name = params.name
    });
    this.trendingUser    = ['sd','sdf','sdfsd']
    this.related         = ['sd','sdf','sdfsd']
    this.comments = this.comments.push({'comments':'Everyone says it is a very good dish, so tasty. The recipe works very well. I have tried another one before which never worked well and is so complicated. Thanks a lot.'},{'date':'2017-12-27T12:53:03.332Z'}, {'by': 'ricky'})
    this.recipeData      = {
      "ingredients": [{'2 1/2' :'cm fresh ginger, peeled and coarsely chopped'}, {'8': 'garlic cloves, peeled'}, {'4': 'tablespoons water'}, {'10': 'tablespoons vegetable oil'},{'275 -425 ml': 'water'},{'1 kg': 'boneless lamb shoulder or 1 kg stewing beef or 1 kg diced chicken'},{'10' :'whole cardamom pods'
,{'2 ':'bay leaves'},{'6 ':'whole cloves'},{'10 ':'whole peppercorns'},{'2 1⁄2 cm ':'cinnamon sticks'},{'4 ':'medium onions, peeled and finely chopped'},{'1 t':'easpoon ground coriander'},{'2 ':'teaspoons cumin seeds'},{'4 ':'teaspoons paprika'},{'1 ':'teaspoon cayenne pepper'},{'1 ':'teaspoon salt'},{'6 ':'tablespoons plain yogurt'},{'1⁄4 ':'teaspoon garam masala],'}],
      "image": "images/Rogan_Josh.jpg",
      "DIRECTIONS":"Put the ginger, garlic, and 4 tablespoons of water into the blender. Blend well until you have a smooth paste.<br><br>Heat oil in a wide heavy pot over a medium heat, brown the meat cubes in serveral batches and set to one side. <br><br>Put the cardamom, bay leaves, cloves, peppercons and cinnamon into the same hot oil. stir once and wait until the cloves swell and the bay leaves begin to take on colour.<br><br> Now put in the onions. Stir and fry for 5 minutes until they turn a medium brown colour. <br><br>Put in the ginger garlic paste and stir for 30 seconds. Add the coriander, cumin, paprika-cayenne, and salt. Stir and fry for 30 seconds.<br><br> Add the fried meat cubes and juices.<br><br> Stir for 30 seconds, now add 1 tablespoon of yoghurt, stir until well blended .<br><br> Add the remaining yoghurt, a tablespoon at a time in the same way. <br><br>Stir and fry for another 3 minutes. Now add 275ml of water if your cooking lamb or chicken and 425ml of water if your cooking beef. Bring to the boil, scraping all the browned spices off the sides and bottom of the pot. <br><br>Cover and cook on low for an hour if your cooking chicken or lamb and 2 hours if cooking beef, (or until meat is tender.). Every 10 minutes give the meat a good stir.<br><br> When the meat is tender take off the lid, turn the heat up to medium, and boil away some of the liquid. All the fat that collects in the pot may be spooned off the top.<br><br> Sprinkle the garam masala and black pepper over the meat before you serve and mix them inches."
    }
     // this.ingredients     = ['dfdffdfdsfsdf', 'asfdfdfsdf' , 'asfdfdfsdf' , 'asfdfdfsdf']
  }

  addComments(text) {

  }
  sanitize(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html) ; 
  }
  getKey(obj) {
    return Object.keys(obj)[0]
  }

  getVal(obj) {
    return obj[Object.keys(obj)[0]]
  } 
  onSelect() {
  	console.log("selected")	
  }



}
