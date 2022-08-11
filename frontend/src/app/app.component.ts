import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  flag = false;
  loggedout = true;
  modalstate = "";
  title = 'book-app';

  setModalState(x:string){
    console.log("x:", x);
    this.modalstate = x;
  }

  setflag(x:boolean){
    this.flag = x;
  }

  setLogout(x:boolean){
    this.loggedout = x;
  }
}
