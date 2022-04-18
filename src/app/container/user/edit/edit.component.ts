import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  users: any;
  user!: User[];
  submitted = false;
  uid = null;
  private userurl = "https://reqres.in/api/users";

  alert: boolean = false;
  editUser2 = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchdata();
  }

  fetchdata(){
    console.log(this.router.snapshot.params['id'])
    this.users.userurl(this.router.snapshot.params['id']).subscribe((result: any) => {
      // console.log(result)
      this.editUser2 = new FormGroup({
        id: new FormControl(result['id']),
        first_name: new FormControl(result['first_name']),
        last_name: new FormControl(result['last_name']),
        email: new FormControl(result['email'])

      })
    });
  }

  updateuser() {
    this.users.updateusers(this.router.snapshot.params['id'], this.editUser2.value).subscribe((result: any) =>
      console.log(result, "data updated successfully")

    )
  }


  // getallUsers() {
  //   let resp: any = this.http.get(this.userurl);
  //   resp.subscribe((data: any) => console.log(data))
  //   resp.subscribe((data: any) => this.users = data['data']);
  // }

  // editUser(fname: any, lname: any, avatar: any, email: any, userID: any) {
  //   (<HTMLInputElement>document.getElementById("fname")).value = fname;
  //   (<HTMLInputElement>document.getElementById("lname")).value = lname;
  //   (<HTMLInputElement>document.getElementById("avatar")).value = avatar;
  //   (<HTMLInputElement>document.getElementById("email")).value = email;
  //   (<HTMLInputElement>document.getElementById("userID")).value = userID;
  // }

  editUser1(uid: any, userData: User) {
    // this.no = 15;
    console.log(userData);
    return this.http.put(`${this.userurl}/${uid}`, userData)
      .subscribe(
        (res: any) => {
          this.submitted = true;
        },
      )
  }
}
