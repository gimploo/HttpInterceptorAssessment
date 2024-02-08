import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent implements OnInit {

  title!: string;
  message!: string;

  constructor(private toasterService: ToasterService) { }

  public ngOnInit(): void 
  {
    this.toasterService.title.subscribe(data => {
      this.title = data;
    })
    this.toasterService.message.subscribe(data => {
      this.message = data;
    })
  }


}