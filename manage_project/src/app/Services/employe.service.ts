import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employes } from '../interfaces/employes';
import { listEmployes } from '../mock-data/data';
import { Origin } from './config';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  origin: string
  constructor(
    private http : HttpClient
  ) { 
    this.origin = Origin+"/employe"
  }
  createEmploye(employe:any):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        
      }),
      withCredentials: true
    }
    let formdata = new FormData();
    for(const key in employe) {
      formdata.append(key, employe[key])
      // console.log(employe[key]);
      
    }
    // return of()
    return this.http.post<any>(this.origin, formdata,httpOptions)
  }
  getAll():Observable<Employes[]> {

    return this.http.get<Employes[]>(this.origin,{withCredentials:true})
  }

  getOneUser(id: string):Observable<Employes|null>{
    return this.http.get<Employes>(this.origin+"/"+id,{withCredentials:true})
      
  }
  getUserByName(name: string):Observable<Employes[]|null> {
    return this.http.get<any>(this.origin+"/findname/"+name,{withCredentials:true});
  }

  updateEmployeProject(id:string,_id:string):Observable<any> {
    let httpoption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }

    return this.http.put<any>("http://localhost:3000/project/addEmploye",{id,_id},httpoption);
  }
}
