import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { AuthService } from 'src/app/auth.service';
// import { ToastrService } from 'ngx-toastr';


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
  first_name: any;
  p:number =1;
  toastr: any;


  // private userurl = "https://jsonplaceholder.typicode.com/users";
  private userurl = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  
  // showToasterSuccess(){
  //   this.toastr.success("Data shown successfully !!", "Data shown successfully !!")
  // }

  ngOnInit() {
    this.getallUsers();
  }

  Search(){
    if(this.first_name == ""){
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter((res: { first_name: string; }) => {
        return res.first_name.toLocaleLowerCase().match(this.first_name.toLocaleLowerCase());
      })
    }
  }
  key:string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
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

  showToaster(){
    this.toastr.success("user deleted")
}

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
