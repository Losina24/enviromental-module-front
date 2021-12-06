import { Component, Input, OnChanges, OnInit } from '@angular/core';
import ListActions from '../../models/ListActions';
import ListElement from '../../models/ListElement';
import ListField from '../../models/ListField';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss'],
})
export class GeneralListComponent implements OnInit, OnChanges {
  @Input() listElements: ListElement[];
  @Input() listActions: ListActions[];

  titles: string[];
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.listElements.length > 0) {
      this.titles = this.listElements[0].getListFieldNames();
    }
  }

  nextPage() {}

  prevPage() {}

  getIcon(action: string) {
    switch (action) {
      case 'Eliminar':
        return 'bi bi-trash2-fill action-red';
        break;

      case 'Editar':
        return 'bi bi-pencil-fill';
        break;

      default:
        return;
        break;
    }
  }

  callAction(name: string, action: string) {
    switch (name) {
      case 'Eliminar':
        
        break;

      case 'Editar':
        this._router.navigateByUrl(action)
        break;
    }
  }
}
