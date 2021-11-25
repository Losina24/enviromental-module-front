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
    console.log('jajajajaj');
    
    this.title$.next(title);
  }

  getTitle$(): Observable<string> {
    console.log('jujuju');
    return this.title$.asObservable();
  }
}
