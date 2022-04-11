import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  router: any;
  user!: User[];
  submitted = false;
  uid = null;
  private userurl = "https://reqres.in/api/users";
  // private userurl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getallUsers();
  }

  getallUsers() {
    let resp: any = this.http.get(this.userurl);
    resp.subscribe((data: any) => console.log(data))
    resp.subscribe((data: any) => this.users = data['data']);
  }

  addUser(userData: User) {
    console.log(userData);
    return this.http.post(this.userurl, userData)
      .subscribe(
        response => {
          this.submitted = true;
          this.getallUsers();
        },
      )
  }


  // editUser(fname: any, lname: any, avatar: any, email: any, userID: any) {
  //   (<HTMLInputElement>document.getElementById("fname")).value = fname;
  //   (<HTMLInputElement>document.getElementById("lname")).value = lname;
  //   (<HTMLInputElement>document.getElementById("avatar")).value = avatar;
  //   (<HTMLInputElement>document.getElementById("email")).value = email;
  //   (<HTMLInputElement>document.getElementById("userID")).value = userID;
  // }

  // editUser1(uid: any, userData: User) {
  //   // this.no = 15;
  //   console.log(userData);
  //   return this.http.put(`${this.userurl}/${uid}`, userData)
  //     .subscribe(
  //       response => {
  //         this.submitted = true;
  //         this.getallUsers();
  //       },
  //     )
  // }


  deleteUser(uid: User) {
    console.log(uid);
    return this.http.delete(`${this.userurl}/${uid}`)
      .subscribe(
        response => {
          this.submitted = true;
          console.log("deleted");
          this.getallUsers();
        },
      )
  }

}
