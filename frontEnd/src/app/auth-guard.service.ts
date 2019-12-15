import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './modules/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(){
    if(!this.authService.isTokenExpired())
    return true;
  this.router.navigate(['/login']);
  return false;
  }

  constructor(private router: Router, private authService: AuthenticationService) { }
}
