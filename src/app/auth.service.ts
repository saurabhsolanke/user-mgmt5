import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService{

    // private readonly mockedUser = new User('eve.holt@reqres.in', 'cityslicka');
    isAuthenticated = false;
    
    constructor(private router: Router) { }

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
    
      logout() {
        this.isAuthenticated = false;
        this.router.navigate(['login']);
      }
}