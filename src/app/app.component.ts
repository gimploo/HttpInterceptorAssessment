import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DisplayComponent } from './components/display/display.component';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToasterService } from './services/toaster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HttpClientModule,

    ButtonComponent,
    DisplayComponent,
    ToasterComponent
  ],
  providers: [
    ApiService,
    ToasterService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HttpInterceptorAssessment';

  data!: any;

  setData(data: any)
  {
    this.data = data;
  }
}