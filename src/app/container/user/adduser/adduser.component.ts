import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users: any;
  router: any;
  user!: User[];
  submitted = false;
  uid = null;
  private userurl = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
}
