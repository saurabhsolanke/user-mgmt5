import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  // onLogout() {
  //   this.router.navigate(['login']);
  //   // localStorage.clear();
  // }
}
