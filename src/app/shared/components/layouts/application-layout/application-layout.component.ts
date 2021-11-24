/**
 * Name: login.component.ts
 * Date: 21 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic of the layout component for the application
 */

import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
//@ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.scss']
})
export class ApplicationLayoutComponent implements OnInit {

  menu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeMenuStatus() {
    if(this.menu) {
      // Hide the menu
      this.menu = false

      anime({
        targets: '.lateral-menu',
        width: 0,
        easing: 'easeInOutQuart',
        duration: 800
      });

      anime({
        targets: '.menu-modules, .menu-title',
        opacity: 0,
        easing: 'easeInOutQuart',
        duration: 550
      });

    } else {
      // Show the menu
      this.menu = true

      anime({
        targets: '.lateral-menu',
        width: '24rem',
        easing: 'easeInOutQuart',
        duration: 800
      });

      anime({
        targets: '.menu-modules, .menu-title',
        opacity: 1,
        easing: 'easeInOutQuart',
        delay: 200,
        duration: 550
      });
    }
  }
}
