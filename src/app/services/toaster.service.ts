import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService implements OnDestroy{

  messageType: BehaviorSubject<string> = new BehaviorSubject<string>('Unknown');

  constructor() { }

  public success()
  {
    this.messageType.next("success");
  }

  public error()
  {
    this.messageType.next("error");
  }

  public ngOnDestroy(): void {

    this.messageType.unsubscribe();
  }
}