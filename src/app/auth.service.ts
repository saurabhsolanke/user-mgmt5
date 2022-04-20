import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { AuthGuard } from './auth.guard';


@Injectable({
    providedIn: 'root'
})

export class AuthService{

    // private readonly mockedUser = new User('eve.holt@reqres.in', 'cityslicka');
    isAuthenticated = true;
    
    constructor(private router: Router) { }

    // isLoggedIn() {
    //   const token = localStorage.getItem('token'); // get token from local storage
    //   const payload = atob(token.split('.')[1]); // decode payload of token
    //   const parsedPayload = JSON.parse(payload); // convert payload into an Object
  
    //   return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  
    // }

    authenticate(): boolean {
        this.isAuthenticated = true;
        this.router.navigate(['user']);
        return true;
     
    }


    
    // private checkCredentials(logInData: EmailValidator): boolean {
    //     return this.checkEmail(logInData.getEmail()) && this.checkPassword(logInData.getPassword());
    //   }
    
    //   private checkEmail(email: string): boolean {
    //     return email === this.mockedUser.getEmail();
    //   }
    
    //   private checkPassword(password: string): boolean {
    //     return password === this.mockedUser.getPassword();
    //   }
    
      // logout() {
      //   this.isAuthenticated = false;
      //   this.router.navigate(['login']);
      // }
}