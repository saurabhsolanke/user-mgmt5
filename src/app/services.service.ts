import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  users: User[] = [];
  

  private loginurl = "https://reqres.in/api/users/2";
  httpClient: any;

  constructor(private http:HttpClient) { }
  getData(){
    let url="https://reqres.in/api/users";
    // let url="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }

  tableData(){
    let url="https://reqres.in/api/unknown";
    return this.http.get(url);
  }

  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }

  login(user: any){
    return this.http.post<any>(this.loginurl, user)
  }


  delete(uid:any): Observable<any> {
    return this.httpClient.delete(`${this.loginurl}/${uid}`);
  }
  edituser(uid:any,gameData:any): Observable<any> {
    return this.httpClient.put(`${this.loginurl}/${uid}`, gameData);
  }


}
