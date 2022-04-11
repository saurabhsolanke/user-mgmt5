import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  private loginurl = "https://reqres.in/api/users/2";

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://reqres.in/api/users";
    // let url="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }

  login(user: any){
    return this.http.post<any>(this.loginurl, user)
  }
  

  logout() {
    localStorage.removeItem('currentUser');
  }

}
