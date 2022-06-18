import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../interfaces/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { listProject } from '../mock-data/data';
import { Origin } from './config';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  origin:string
  constructor(
    private http : HttpClient
  ) {
    this.origin = Origin+"/project"
   }

  getAll(): Observable<Project[]> {
    return this.http.get<any>(this.origin,{withCredentials:true});
  }

  getProjectByName(name: string): Observable<Project[]|null> {
    name = name.toLocaleLowerCase()
        
    return this.http.get<any>(this.origin+"/byname/"+name,{withCredentials:true})
  }
  getProject(id:string): Observable<any|null> {
    return this.http.get<any>(this.origin+"/"+id,{withCredentials:true});
  }

  addProject(Project: Project): Observable<Project> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }

    return this.http.post<any>(this.origin,Project,httpOption);
  }

  Delete(id?:string): Observable<any> {
    return this.http.delete<any>(this.origin+'/'+id,{withCredentials:true});
  }

  update(project:Project){
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    let id = project._id
    // delete project._id
    // console.log(project);
    
    console.log(project._id);
    
    this.http.put<any>(this.origin+'/'+id,project,httpOption)
      .subscribe(data => {
        console.log(data);
        
      })
  }
}
