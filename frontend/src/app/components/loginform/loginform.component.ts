import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  email  = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  password = new FormControl();

  
  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginClick = (e:any) => {
    e.preventDefault();
    const headerDict = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization':`${this.password.value}`
    })
    
    const requestOptions = {                                                                                                                                                                                 
      headers: headerDict, 
    };

    this.loginService.getAll(this.email.value ,requestOptions).subscribe(
      (data)=>{
        console.log(data);
      });
  }  

  

}
