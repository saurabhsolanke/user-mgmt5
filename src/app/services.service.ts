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

  private loginurl = "https://reqres.in/api/login";
  private userurl1 = " https://reqres.in/api/users?page=2";

  httpClient: any;
  get: any;

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
  edituser(uid:any): Observable<any> {
    return this.httpClient.put(`${this.loginurl}/${uid}`);
  }

  getCurrentData(uid: any){
    return this.httpClient.get(`${this.userurl1}/${uid}`);
  }

  updateuser(uid: any, data: any){
    return this.httpClient.get(`${this.userurl1}/${uid}`,data);

  }

}
