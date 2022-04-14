import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // private tableurl = "https://reqres.in/api/unknown";

  usersd: any;
  name: any;
  p: number = 1;
  list = [];

  constructor(private http: HttpClient) { }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    let resp: any = this.http.get('https://reqres.in/api/unknown');
    resp.subscribe((data: any) => console.log(data))
    resp.subscribe((data: any) => this.usersd = data['data']);
  }

  Search() {
    if (this.name == "") {
      this.ngOnInit();
    }
    else {
      this.usersd = this.usersd.filter((res: { name: string; }) => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
}

