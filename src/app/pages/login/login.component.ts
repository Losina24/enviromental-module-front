/**
 * Name: login.component.ts
 * Date: 22 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic for login page
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  // Inputs
  email: string = "";
  password: string = "";
  error: boolean = false;
  submitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.email.length > 0 && this.password.length > 0) {
      this.error= true;
    }
  }
}
