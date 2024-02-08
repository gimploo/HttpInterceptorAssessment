import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService implements OnDestroy{

  title: BehaviorSubject<string> = new BehaviorSubject<string>('Title');
  message: BehaviorSubject<string> = new BehaviorSubject<string>('Message');
  styleVisible: BehaviorSubject<string> = new BehaviorSubject<string>('hidden');

  constructor() { }

  private _toggleVisibility()
  {
    this.styleVisible.next('visible');

    setTimeout(() => {
      this.styleVisible.next('hidden');
    }, 3000);
  }

  public success()
  {
    this.title.next("Success");
    this.message.next('Operation successful!');
    this._toggleVisibility();
  }

  public error()
  {
    this.title.next("Error");
    this.message.next('An error occurred. Please try again later.');
    this._toggleVisibility();
  }

  public ngOnDestroy(): void {

    this.title.unsubscribe();
    this.message.unsubscribe();
  }
}