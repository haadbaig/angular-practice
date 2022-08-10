import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.scss']
})
export class NavheaderComponent {
  @Output() modalBoolean:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  emit(keyword:string){
    this.modalBoolean.emit(keyword)
  }

}
