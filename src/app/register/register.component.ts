import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/user.model';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AppHttpService} from '../services/app-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: UserModel = new UserModel();
  registerForm: FormGroup;
  hide = true;
  constructor(private  formBuilder: FormBuilder,
              private  appHttpService: AppHttpService,
              private  router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name : [this.user.name, [
        Validators.required,
      ]],
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

  onRegSubmit() {
    alert(this.user.name + ' ' + this.user.email + ' '  + this.user.password);
    this.appHttpService.register(this.user).subscribe(
      res=>{
        alert('Success');
        this.router.navigate(['/login']);
    },
      err=>{
        alert('Failed');
        this.router.navigate(['/']);
      }
    )

  }
}
