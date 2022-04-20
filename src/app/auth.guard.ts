import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.authenticate()) {
        this.router.navigate(['/login']); // go to login if not authenticated
        return false;
      }
    return true;
  }

  // canActivate() {
  //   if (this.authService.authenticate()) {
  //     return true;
  //   }
  //   alert(" ! Not logged in Check Email or password !!! ");
  //   this.router.navigate(['login']);
  //   return false;
  // }

  // upper

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
