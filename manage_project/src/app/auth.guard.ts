import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private route: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean 
    | UrlTree> | boolean | UrlTree {
      let sta = localStorage.getItem('state');
      // console.log(sta == 'true'||sta == null);
      
      if(sta != 'true') {
        this.route.navigate(['login'])
        console.log(false);
        
        return false
      } else {
        console.log(true);
        
        return true
      }
  }
  
}
