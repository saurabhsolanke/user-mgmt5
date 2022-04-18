import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  authService: any;
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

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (this.authService.isAuthenticated) {
  //     return true;
  //   }
  //   this.router.navigate(['']);
  //   return false;
  // }
}
