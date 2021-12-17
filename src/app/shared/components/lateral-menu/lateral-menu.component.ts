/**
 * Name: login.component.ts
 * Date: 21 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic for lateral menu component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserSession from 'src/app/shared/models/UserSession'; 

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent implements OnInit {

  role: string;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {    
    let user: UserSession = new UserSession();
    this.role = user.getRole();
  }

}
