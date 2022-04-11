import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
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

  editUser(fname: any, lname: any, avatar: any, email: any, userID: any) {
    (<HTMLInputElement>document.getElementById("fname")).value = fname;
    (<HTMLInputElement>document.getElementById("lname")).value = lname;
    (<HTMLInputElement>document.getElementById("avatar")).value = avatar;
    (<HTMLInputElement>document.getElementById("email")).value = email;
    (<HTMLInputElement>document.getElementById("userID")).value = userID;
  }

  editUser1(uid: any, userData: User) {
    // this.no = 15;
    console.log(userData);
    return this.http.put(`${this.userurl}/${uid}`, userData)
      .subscribe(
        (res:any) => {
          this.submitted = true;
          this.getallUsers();
        },
      )
  }
}
