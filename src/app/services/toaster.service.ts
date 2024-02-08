import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService implements OnDestroy{

  title: BehaviorSubject<string> = new BehaviorSubject<string>('Title');
  message: BehaviorSubject<string> = new BehaviorSubject<string>('Message');

  constructor() { }

  public success()
  {
    this.title.next("Success");
    this.message.next('Operation successful!');
  }

  public error()
  {
    this.title.next("Error");
    this.message.next('An error occurred. Please try again later.');
  }

  public ngOnDestroy(): void {

    this.title.unsubscribe();
    this.message.unsubscribe();
  }
}