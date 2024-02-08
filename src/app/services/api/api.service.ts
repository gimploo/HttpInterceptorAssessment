import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL : string = "https://jsonplaceholder.typicode.com";


  constructor(private http: HttpClient) { }

  getPost() : Observable<any[]> {
    return this.http.get<any[]>(
      `${this.API_URL}/posts`
    );
  }

  invalidPost() : Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}/posters`
    )
  }
}
