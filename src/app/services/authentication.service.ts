import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginResponseModel} from '../models/loginResponse.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient
                  ) { }

  authenticate(username, password) {
    const  headers = new HttpHeaders({Authorization : 'Basic' + btoa(username + ':' + password)});
    return this.httpClient.get<LoginResponseModel>('http://localhost:8080/user/validateLogin', {headers}).pipe(
      map(
        loginData => {
          sessionStorage.setItem('username', username);
          return loginData;
        }
      )
    );

  }
}
