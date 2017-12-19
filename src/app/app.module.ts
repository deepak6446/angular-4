import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';            //required for routing
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';   //component
import { FoodComponent } from './food/food.component';   //component
import { SerService } from './service/service/ser.service';
import { BoldDirective } from './directive/bold/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BoldDirective,    //directive is also a component that is used for manupulating DOM
    FoodComponent
  ],
  imports: [      //libraries that you want to import
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
    	{ path:'food', component : FoodComponent },
    	{ path:'list', component : ListComponent },	
    	{ path: '', redirectTo: 'food', pathMatch: 'full' },	
    	{ path: '**', redirectTo: 'food'},	
    ])
  ],
  providers: [ SerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
