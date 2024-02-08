import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DisplayComponent } from './components/display/display.component';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ToasterComponent } from './components/toaster/toaster.component';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { ToasterService } from './services/toaster/toaster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ButtonComponent,
    DisplayComponent,
    HttpClientModule,
    ToasterComponent
  ],
  providers: [
    ApiService,
    HttpInterceptorService,
    ToasterService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HttpInterceptorAssessment';

  toasterMessage: string = '';

  data!: any;

  setData(data: any)
  {
    console.log(data);
    this.data = data;
  }
}