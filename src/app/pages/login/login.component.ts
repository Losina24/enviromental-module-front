/**
 * Name: login.component.ts
 * Date: 22 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic for login page
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession';
import { LoginService } from './login.service';

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

  constructor(
    private _service: LoginService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.email.length > 0 && this.password.length > 0) {
      this._service.checkLogin(this.email, this.password).subscribe( res => {
        console.log('login res', res);
        
        if(res != null) {
          console.log('respuesta', res.response.role)
          let userSession = new UserSession()
          userSession.createSession(res.response.userId, res.response.role, res.response.councilId)
          this._router.navigateByUrl("/dash");
        } else {
          this.error= true;
        }
      })
    }
  }
}
