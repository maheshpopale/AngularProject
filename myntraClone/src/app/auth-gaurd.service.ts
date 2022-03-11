import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tokenGetter } from './app.module';
JwtModule.forRoot({



  config:{



    tokenGetter:tokenGetter,



    allowedDomains:["localhost:44351"],



    disallowedRoutes:[]



  }



})
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService  {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let jwtHelper: JwtHelperService=new JwtHelperService();


    const token=localStorage.getItem("jwt");
 
 
 
    if(token && jwtHelper.isTokenExpired(token))
 
 
 
    {
 
 
 
      return true;
 
 
 
    }
 
    else
 
    {
 
 
 
    this.router.navigate(["/login"]);
 
 
 
    return false;
 
    }
 
   }
}
