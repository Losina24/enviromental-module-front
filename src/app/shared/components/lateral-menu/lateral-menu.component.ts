/**
 * Name: login.component.ts
 * Date: 21 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic for lateral menu component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if(sessionStorage.getItem("userId") != null) {
      let userId = sessionStorage.getItem("userId");
      //@ts-ignore
      this.userId = parseInt(userId)
      //@ts-ignore
      this.role = sessionStorage.getItem("role");
    } else {
      this._router.navigateByUrl("/");
    }
    
  }

}
