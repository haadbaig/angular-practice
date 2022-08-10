import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag = "fade";
  title = 'book-app';

  setFlag(x:string){
    console.log(x);
    this.flag = x;
  }

}
