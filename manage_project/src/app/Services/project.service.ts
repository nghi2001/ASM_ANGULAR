import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../interfaces/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { listProject } from '../mock-data/data';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http : HttpClient
  ) { }

  getAll(): Observable<Project[]> {
    return this.http.get<any>("http://localhost:3000/project");
  }

  getProjectByName(name: string): Observable<Project[]|null> {
    name = name.toLocaleLowerCase()
    let projects :Project[] = listProject.filter(project => project.name.toLocaleLowerCase().includes(name));
    console.log(projects);
    
    if(projects == null) {
      return of(null)
    }
    return of(projects)
  }
  getProject(id:string): Observable<any|null> {
    return this.http.get<any>("http://localhost:3000/project/"+id);
  }

  addProject(Project: Project): Observable<Project> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<any>('http://localhost:3000/project',Project,httpOption);
  }

  Delete(id?:string): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/project/'+id);
  }

  update(project:Project){
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let id = project._id
    // delete project._id
    // console.log(project);
    
    console.log(project._id);
    
    this.http.put<any>('http://localhost:3000/project/'+id,project,httpOption)
      .subscribe(data => {
        console.log(data);
        
      })
  }
}
