import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }
  
  getUserTodo(header:any): Observable<any> {
    const res = this.http.get<string>(baseUrl+`todos`, header);
    return res;
  }
}