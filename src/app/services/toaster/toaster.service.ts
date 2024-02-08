import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor() { }

  success(message: string) {
    this.showToast(message);
  }

  error(message: string) {
    this.showToast(message);
  }

  private showToast(message: string) {
    // Implement logic to display the toaster component with the specified message
  }
}
