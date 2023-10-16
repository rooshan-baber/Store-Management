import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { UserdataService } from '../services/userdata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private authService: UserdataService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    if (this.authService.getToken()) {
      console.log('User has token. Allowing access.');
      return true;
    } else {
      console.log('User has no token. Redirecting to login.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}