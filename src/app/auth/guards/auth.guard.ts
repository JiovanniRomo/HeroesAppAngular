import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificarAuth().pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ) {
            this.router.navigate(['./auth/login']);
          }
        } )
      )


      // if(this.authService.auth.id) {
      //   return true;
      // } 

      // return false
  }

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  // Puedo cargar el module?
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificarAuth().pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ) {
            this.router.navigate(['./auth/login']);
          }
        } )
      )


      // if(this.authService.auth.id) {
      //   return true;
      // } 

      // return false
  }
}
