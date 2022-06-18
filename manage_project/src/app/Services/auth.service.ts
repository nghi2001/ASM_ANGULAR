import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Origin } from './config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  origin:string
  constructor(
    private http: HttpClient
  ) {
    this.origin = Origin+'/auth';
   }

   logout():Observable<any> {
    return this.http.post<any>(this.origin+'/logout',{},{withCredentials:true})
   }

   login(user:any):Observable<any> {
    let httpoption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    console.log(user);
    
    return this.http.post<any>(this.origin+'/login',JSON.stringify(user),httpoption)
   }
}
