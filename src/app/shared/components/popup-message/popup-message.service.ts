import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupMessageService {

  private popupMessage$: Subject<[title: string, message: string, error: boolean]>
  private close$: Subject<boolean>;

  constructor() {
    this.popupMessage$ = new Subject();
    this.close$ = new Subject();
  }

  sendMessage(popupMessage: [string, string, boolean]) {
    this.popupMessage$.next(popupMessage);
  }

  getMessage$(): Observable<[string, string, boolean]> {
    return this.popupMessage$.asObservable();
  }

  close() {
    this.close$.next(true)
  }

  getClose(): Observable<boolean> {
    return this.close$.asObservable();
  }
}
