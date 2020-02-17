import {Component, OnInit, ViewChild} from '@angular/core';
import {AppHttpService} from '../services/app-http.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Phone} from '../models/phone.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  phoneList: Phone[];
  searchForm: FormGroup;
  searchFormByName: FormGroup;
  searchString: string;
  searchString2: string;

  constructor(private  appHttpService: AppHttpService,
              private  formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.getAllPhones();
    this.searchForm = this.formBuilder.group({
      keyword : [this.searchString, [
        Validators.required,
      ]], });

    this.searchFormByName = this.formBuilder.group({
      keyword2 : [this.searchString2, [
        Validators.required,
      ]], });
  }

  getAllPhones() {
    this.appHttpService.getAllPhones().subscribe(
      list => {
        this.phoneList = list;
      }, err => {
        alert('Error Occurred');
      });
  }
  onSearchSubmit(){
    this.appHttpService.getPhoneByBrand(this.searchString).subscribe(
      list => {
        this.phoneList = list;
      }, err => {
        alert('Error Occurred');
      });
  }

  onSearchSubmitByName(){
   this.appHttpService.getPhoneByModelName(this.searchString2).subscribe(
     list => {
       this.phoneList = list;
     }, err => {
       alert('Error Occurred');
     });
  }
}
