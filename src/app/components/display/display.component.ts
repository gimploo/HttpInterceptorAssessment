import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [ 
    CommonModule
  ],
  providers: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {

  @Input() displayData!: any;

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {

  }

}
