import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor() { }

    // authUser(user: any) {
    //     let UserArray = [];
    //     if (localStorage.getItem('users')) {
    //         UserArray = JSON.parse(localStorage.getItem('Users'));
    //     }
    //     return UserArray.find((p: { email: any; password: any; }) => p.email === user.email && p.password === user.password)
    // }
}