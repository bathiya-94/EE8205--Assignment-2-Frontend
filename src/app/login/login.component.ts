import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../models/login.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppHttpService} from '../services/app-http.service';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  user: LoginModel  = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  invalidLogIn = false;
  constructor(private  formBuilder: FormBuilder,
              private  authenticationService: AuthenticationService,
              private  router: Router,
              private appHttpService: AppHttpService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      password : [this.user.password, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]]
    });
  }

  onLoginSubmit() {
    alert( this.user.email + ' '  + this.user.password);
    const  response = this.authenticationService.authenticate(this.user.email, this.user.password);
   // const response = this.appHttpService.login(this.user.email, this.user.password);
    response.subscribe(data => {
     this.router.navigate(['/profile']);
     this.invalidLogIn = false;
   },
      error => {
      this.invalidLogIn = true;
      }
   );
  }
}
