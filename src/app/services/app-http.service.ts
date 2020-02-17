import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {log} from 'util';
import {UserModel} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private  httpClient: HttpClient) {}

  public  login(username: string, password: string) {
    const  headers = new HttpHeaders({Authorization : 'Basic' + btoa(username + ':' + password)});
    return this.httpClient.get('http://localhost:8080/user/all');

  }

  public register(user: UserModel)
  {
    return this.httpClient.post('http://localhost:8080/user/save', user);
  }

  public  getAllPhones(){
    return this.httpClient.get<any>('http://localhost:8080/phone/all');
  }

  public  getPhoneByBrand(brand: string){
    return this.httpClient.get<any>('http://localhost:8080/phone/brands/' + brand);
  }

  public  getPhoneByModelName(modelName: string){
    return this.httpClient.get<any>('http://localhost:8080/phone/models/' + modelName);
  }

}
