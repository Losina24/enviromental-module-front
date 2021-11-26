import { Component, OnInit, Input } from '@angular/core';
import SimpleDashboardElement from 'src/app/shared/models/SimpleDashboardElement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-dashboard-frame',
  templateUrl: './simple-dashboard-frame.component.html',
  styleUrls: ['./simple-dashboard-frame.component.scss']
})
export class SimpleDashboardFrameComponent implements OnInit {
  
  @Input() dashboardElement: SimpleDashboardElement;
  title: string;
  content: number | string;
  link: string;
  icon: string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.dashboardElement.getTitle();
    this.content = this.dashboardElement.getContent();
    this.link = this.dashboardElement.getLink();
    this.icon = this.dashboardElement.getIcon();
  }

}
