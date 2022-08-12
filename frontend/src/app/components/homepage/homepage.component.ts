import { HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnChanges {
  todos = [];
  titleTodo = new FormControl();
  textTodo = new FormControl();
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.getData();

    this.todoService.updateData.subscribe(data => {
      this.getData();
    })
  }

  getData() {
    const headerDict = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization':`${localStorage.getItem('userid')}`
    })
    
    const requestOptions = {                                                                                                                                                                                 
      headers: headerDict, 
    };
    this.todoService.getUserTodo(requestOptions).subscribe((data)=>{
      this.todos = data.data
      console.log("array data:", this.todos)
    })
  }

  async handleNewItem(){
    let count = 0;
    await this.todoService.getTodosCount().subscribe(async (data)=>{
      const todo = {
        id: data.COUNT,
        userid: localStorage.getItem("userid"),
        title: this.titleTodo.value,
        todo: this.textTodo.value
      }
      await this.todoService.addTodo(todo).subscribe((res)=>{
        this.getData();
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  
}
