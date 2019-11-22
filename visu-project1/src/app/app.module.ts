import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { Event3Component } from './event3/event3.component';
import { Event4Component } from './event4/event4.component';
import { SdxComponent } from './sdx/sdx.component';
import { EmployeeComponent } from './employee/employee.component';
import { PbExComponent } from './pb-ex/pb-ex.component';
import { PipesComponent } from './pipes/pipes.component';
import { HelloComponent } from './hello/hello.component';
import { EventComponent } from './event/event.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Login2Component } from './login2/login2.component';
import { CrudHttpComponent } from './crud-http/crud-http.component';
import { RegisterComponent } from './register/register.component';
import { CanvasComponent } from './canvas/canvas.component';
import { AnimationComponent } from './animation/animation.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { Login3Component } from './login3/login3.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { FilterPipe } from './filter.pipe';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Event1Component,
    Event2Component,
    Event3Component,
    Event4Component,
    SdxComponent,
    EmployeeComponent,
    PbExComponent,
    PipesComponent,
    HelloComponent,
    EventComponent,
    CustomersComponent,
    ContactComponent,
    AboutComponent,
    LogoutComponent,
    DashboardComponent,
    HomeComponent,
    NotFoundComponent,
    Login2Component,
    CrudHttpComponent,
    RegisterComponent,
    CanvasComponent,
    AnimationComponent,
    AngularMaterialComponent,
    Login3Component,
    RegisterLoginComponent,
    InputSearchComponent,
    FilterPipe,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'logout',component:LogoutComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'animation',component:AnimationComponent},
      {path:'event',component:EventComponent},
      {path:'',component:HomeComponent},
      {path:'',component:HomeComponent},
      {path:'**',component:NotFoundComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
