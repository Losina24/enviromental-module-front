import { Component, Input, OnChanges, OnInit } from '@angular/core';
import ListElement from '../../models/ListElement';
import ListField from '../../models/ListField';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})

export class GeneralListComponent implements OnInit, OnChanges {

  @Input() listElements: ListElement[];
  
  titles: string[];
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    if(this.listElements.length > 0) {
      this.titles = this.listElements[0].getListFieldNames();
    }
  }

  nextPage() {

  }

  prevPage() {

  }
}
