import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const baseUrl = 'http://localhost:3000/todos';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  updateData = new Subject();
  
  getUserTodo(header:any): Observable<any> {
    const res = this.http.get<string>(baseUrl, header);
    return res;
  }

  getTodosCount():Observable<any> {
    const res = this.http.get<string>(baseUrl+`/getcount`);
    return res;
  }

  addTodo(todoObject:any): Observable<any> {
    console.log("todoObject:",todoObject)
    const res = this.http.post<string>(baseUrl+`/addtodo`, todoObject);
    return res;
  }

  deleteTodo(tid:any):Observable<any> {
    console.log("Tid:",tid)
    const res = this.http.delete<string>(baseUrl+`/deletetodo/${tid}`);
    return res;
  }
}