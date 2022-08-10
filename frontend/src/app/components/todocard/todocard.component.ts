import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {
  @Input() text:string = '';
  @Input() title = '';
  @Input() todoId = '';
  constructor() { }

  ngOnInit(): void {
  }

}
