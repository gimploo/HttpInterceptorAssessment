import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  providers:[
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Output() sendDataEvent = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  realApiFetch()
  {
    this.apiService.getPost().subscribe(
      (response: any[]) => {
        this.sendDataEvent.emit(
          JSON.stringify(response, null, 2)
        );
      },
      (error) => {
        this.sendDataEvent.emit(
          JSON.stringify(error)
        );
      }
    );
  }

  fakeApiFetch()
  {
    this.apiService.invalidPost().subscribe(
      (response: any) => {
        this.sendDataEvent.emit(
          JSON.stringify(JSON.parse(response), null, 2)
        );
      },
      (error) => {
        this.sendDataEvent.emit(
          JSON.stringify(error, null, 2)
        );
      }
    );
  }

}
