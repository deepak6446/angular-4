import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';            //required for routing
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';   //component
import { FoodComponent } from './food/food.component';   //component
import { SerService } from './service/service/ser.service';
import { MethodsService } from './service/methods/methods.service';
import { BoldDirective } from './directive/bold/bold.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpModule } from '@angular/http';

@NgModule({    //decorator
  declarations: [
    AppComponent,
    ListComponent,
    BoldDirective,    //directive is also a component that is used for manupulating DOM
    FoodComponent, NavbarComponent, LoginPageComponent
  ],
  imports: [      //libraries that you want to import
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    	{ path:'food', component : FoodComponent },
      { path:'list', component : ListComponent },  
    	{ path:'login', component : LoginPageComponent },	
    	{ path: '', redirectTo: 'login', pathMatch: 'full' },	
    	{ path: '**', redirectTo: 'login'},	
    ])
  ],
  providers: [ SerService, MethodsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
