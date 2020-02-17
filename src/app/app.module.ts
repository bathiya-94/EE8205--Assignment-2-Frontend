import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import {MaterialModule} from './material/material.module';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {AppHttpService} from './services/app-http.service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationService} from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppHttpService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
