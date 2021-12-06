import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.scss']
})
export class PopupConfirmationComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() link: string;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  accept() {
    this.close.emit(true);
    this._router.navigateByUrl(this.link);
  }

  decline() {
    this.close.emit(true);
  }
}
