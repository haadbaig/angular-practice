import { HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todo.services';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnChanges {
  todos = []
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
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

  handleNewItem(){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  
}
