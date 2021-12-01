/**
 * Name: login.component.ts
 * Date: 21 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic of the layout component for the application
 */

import { Component, OnChanges, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
import UserSession from 'src/app/shared/models/UserSession';

//@ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.scss']
})

export class ApplicationLayoutComponent implements OnInit {

  // Atributes
  menu: boolean = true;
  title: string = "Dashboard general";
  userId: number;

  // Constructor
  constructor(
    private _titleUpdaterService: TitleUpdaterService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) { }
  
  // Methods
  ngOnInit(): void {
    // Page title management
    this._titleUpdaterService.getTitle$().subscribe( (title:string) => {
      this.title = title;
      this._cdr.detectChanges();
    })

    // Session management
    let userSession = new UserSession();
		if(userSession.checkSession()) {
			this.userId = userSession.getUserId();
		} else {
			//this._router.navigateByUrl("/");
		}
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
