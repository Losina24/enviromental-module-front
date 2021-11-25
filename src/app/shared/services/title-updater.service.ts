import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TitleUpdaterService {

  private title$: Subject<string>

  constructor() {
    this.title$ = new Subject();
  }

  changeTitle(title: string) {
    this.title$.next(title);
  }

  getTitle$(): Observable<string> {
    return this.title$.asObservable();
  }
}
