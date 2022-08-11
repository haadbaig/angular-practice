import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.scss']
})
export class NavheaderComponent {
  loggedin = false;
  @Output() modalBoolean:EventEmitter<string> = new EventEmitter<string>();
  @Output() isLogin:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isLogout:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  emit(keyword:string){
    this.modalBoolean.emit(keyword)
  }
  setLogin(x:boolean){
    this.loggedin=x;
    this.isLogin.emit(x);
  }

  handleLogout () {
    console.log("before clear:", localStorage.getItem("userid"));
    localStorage.clear();
    console.log("after clear:", localStorage.getItem("userid"));
    this.isLogout.emit(false);
  }

}
