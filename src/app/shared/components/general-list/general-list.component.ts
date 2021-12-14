import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import ListActions from '../../models/ListActions';
import ListElement from '../../models/ListElement';
import ListField from '../../models/ListField';
import { Router } from '@angular/router';
import ConfirmationPopupMessage from '../../models/ConfirmationPopupMessage';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss'],
})
export class GeneralListComponent implements OnInit, OnChanges {
  @Input() listElements: ListElement[];
  @Input() listActions: ListActions[];
  @Input() confirmationPopup: ConfirmationPopupMessage;
  @Output() confirmedRemoveId: EventEmitter<number> = new EventEmitter<number>();

  titles: string[];
  orderIndex: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  total: number = 0;
  removeId: number = 0;

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

      case 'Editar':
        return 'bi bi-pencil-fill';

      default:
        return;
    }
  }

  callAction(name: string, action: string) {
    switch (name) {
      case 'Eliminar':
        this.removeId = parseInt(action);
        
        break;

      case 'Editar':
        this._router.navigateByUrl(action)
        break;
    }
  }

  emitRemoveConfirmation() {
    this.confirmedRemoveId.emit(this.removeId)
  }
}
