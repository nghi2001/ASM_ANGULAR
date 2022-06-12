import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tasks } from '../mock-data/data';
import { Task } from '../interfaces/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTaskFromProject(idProject?:string):Observable<any>{
    
    
    return this.http.get<any>('http://localhost:3000/task/byproject/'+idProject);
  
  }

  addTask(Task:any):Observable<Task> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<any>('http://localhost:3000/task',JSON.stringify(Task),httpOption);
  }

  delete(id:string): Observable<any> {
    return this.http.delete('http://localhost:3000/task/'+id);
  }
}
