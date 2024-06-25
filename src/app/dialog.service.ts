// dialog.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();

  private contentSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public content$ = this.contentSubject.asObservable();

  open(content: any) {
    this.contentSubject.next(content);
    this.isOpenSubject.next(true);
  }

  close() {
    this.isOpenSubject.next(false);
    this.contentSubject.next(null);
  }
}
