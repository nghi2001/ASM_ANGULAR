import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employes } from '../interfaces/employes';
import { listEmployes } from '../mock-data/data';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(
    private http : HttpClient
  ) { }

  getAll():Observable<Employes[]> {

    return this.http.get<Employes[]>("http://localhost:3000/employe")
  }

  getOneUser(id: string):Observable<Employes|null>{
    return this.http.get<Employes>("http://localhost:3000/employe"+id)
      
  }
  getUserByName(name: string):Observable<Employes[]|null> {
    return this.http.get<any>("http://localhost:3000/employe/findname/"+name);
  }

  updateEmployeProject(id:string,_id:string):Observable<any> {
    let httpoption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.put<any>("http://localhost:3000/project/addEmploye",{id,_id},httpoption);
  }
}
