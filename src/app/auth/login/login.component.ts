import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ServicesService } from '../../services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  loginMode:boolean = true;
  title = 'user-mgmt5';
  public userDetails: undefined = <any>{
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  }


  public Form!: FormGroup;
  constructor(private fb: FormBuilder,
     private router: Router,
      public apiData: ServicesService) {
   }

   login() {
    if(this.Form.valid){
      console.log(this.Form.value)
      this.Form.reset();
      this.router.navigate(['user'])
    }

    else{
      console.log("not working");
    }
    this.apiData.login(this.loginUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    var success = this.apiData.getData();

      if (success) {
      console.log(this.router);
      this.router.navigate(['user']);
      }
      else {
      console.log("Login failed , display error to the user");
      };

  }

  
  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

 
  onLogout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}

function email(email: any) {
  throw new Error('Function not implemented.');
}

