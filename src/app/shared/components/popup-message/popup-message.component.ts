import { Component, Input, OnInit } from '@angular/core';
import { PopupMessageService } from './popup-message.service';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})

export class PopupMessageComponent implements OnInit {

  @Input() display: boolean;
  title: string = "Error";
  message: string = "Error";
  error: boolean = false;

  constructor(
    private _popupMessageService: PopupMessageService
  ) { }

  ngOnInit(): void {
    this._popupMessageService.getMessage$().subscribe( (res: [string, string, boolean]) => {
      this.title = res[0];
      this.message = res[1];
      this.error = res[2];
    })
  }

  closePopup() {
    this._popupMessageService.close()
  }
}
