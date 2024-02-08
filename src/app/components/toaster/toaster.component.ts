import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})

export class ToasterComponent {

  @Input() message!: string;

}


interface ToasterNode {
  title: string;
  message: string;
}