import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent implements OnInit {

  config: ToasterConfig;
  visibility: string;

  constructor(private toasterService: ToasterService) 
  { 
    this.config = {
      title: "Title",
      bgcolor: "black",
      message: "Message"
    }

    this.visibility = 'hidden';
  }

  private _setupToasterConfig(type: string)
  {
    switch(type.toLowerCase())
    {
      case 'success':
        this.config.title = 'Success';
        this.config.message = 'Operation successful!';
        this.config.bgcolor = 'lightgreen';
        this._toggleVisibility();
      break;

      case 'error':
        this.config.title = 'Error';
        this.config.message = 'An error occurred. Please try again later.';
        this.config.bgcolor = 'lightcoral';
        this._toggleVisibility();
      break;

      default:
        this.visibility = 'hidden';
      break;
    }
  }

  private _toggleVisibility()
  {
    this.visibility = 'visible';
    setTimeout(() => {
      this.visibility = 'hidden';
    }, 3000);
  }

  public ngOnInit(): void 
  {
    this.toasterService.messageType.subscribe(data => {
      console.log(data);
      this._setupToasterConfig(data);
    })
  }

}

interface ToasterConfig {
  title: string;
  message: string;
  bgcolor: string;
}