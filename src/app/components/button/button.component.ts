import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToasterService } from '../../services/toaster.service';

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

  constructor(private apiService: ApiService, private toasterService: ToasterService) {}

  realApiFetch()
  {
    this.apiService.getPost().subscribe(
      (response: any[]) => {
        this.sendDataEvent.emit(
          JSON.stringify(response, null, 2)
        );
        this.toasterService.success();
      },
      (error) => {
        this.sendDataEvent.emit(
          JSON.stringify(error)
        );
        this.toasterService.error();
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
        this.toasterService.success();
      },
      (error) => {
        this.sendDataEvent.emit(
          JSON.stringify(error, null, 2)
        );
        this.toasterService.error();
      }
    );
  }

}
