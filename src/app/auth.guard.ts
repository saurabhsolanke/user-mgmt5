import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';


interface Alert {
  type: string;
  message: string;
}

const Alerts: Alert[] = [{
  type: 'warning',
  message: 'This is a warning alert',
},
  {
    type: 'primary',
    message: 'This is a primary alert',
  },
];


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: ServicesService, private router: Router) {

  }

  canActivate() {
    if (this.auth.IsLoggedIn()) {
      return true;
    }
    alert(" ! Not logged in Check Email or password !!! ");
    this.router.navigate(['login']);
    return false;
  }
}
