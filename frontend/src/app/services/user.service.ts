import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  
  getAll(email:any, header:any): Observable<any> {
    const res = this.http.get<string>(baseUrl+`login/${email}`, header);
    console.log("res:", res);
    return res;
  }
}