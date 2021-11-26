/**
 * Name: login.component.ts
 * Date: 21 - 11 - 2021
 * Author: Alejandro Losa García
 * Description: Logic of the layout component for the application
 */

import { Component, OnChanges, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TitleUpdaterService } from 'src/app/shared/services/title-updater.service';
//@ts-ignore
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.scss']
})
export class ApplicationLayoutComponent implements OnInit {

  menu: boolean = true;
  title: string = "Dashboard general"

  constructor(
    private _titleUpdaterService: TitleUpdaterService,
    private _cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._titleUpdaterService.getTitle$().subscribe( (title:string) => {
      this.title = title;
      this._cdr.detectChanges();
    })
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
