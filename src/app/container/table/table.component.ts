import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // private tableurl = "https://reqres.in/api/unknown";

  users: any;
  name: any;
  p: number = 1;

  constructor(private http: HttpClient) { }

 
  ngOnInit(){
    this.getdata();
  }

  Search() {
    if (this.name == "") {
      this.ngOnInit();
    }
    else {
      this.users = this.users.filter((res: { name: string; }) => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  getdata() {
    let resp: any = this.http.get('https://reqres.in/api/unknown');
    resp.subscribe((data: any) => console.log(data))
    resp.subscribe((data: any) => this.users = data['data']);
  }
}

