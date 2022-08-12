import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.services';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {
  @Input() todo:any;
  constructor(public todoService:TodoService) { 
  }

  ngOnInit(): void {
  }

  handleDelete(){
    console.log("Delete triggered")
    this.todoService.deleteTodo(this.todo.id).subscribe((res)=>{
      console.log("delete status:",res.status);
      this.todoService.updateData.next(res);
    });
  }

}
