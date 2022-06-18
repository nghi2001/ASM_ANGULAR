import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Origin } from './config';
import { Task } from '../interfaces/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  origin:string

  constructor(
    private http: HttpClient
  ) {
    this.origin = Origin+"/task"
   }

  getTaskFromProject(idProject?:string):Observable<any>{
    
    
    return this.http.get<any>(this.origin+'/byproject/'+idProject,{withCredentials:true});
  
  }

  addTask(Task:any):Observable<Task> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }

    return this.http.post<any>(this.origin+'',JSON.stringify(Task),httpOption);
  }

  delete(id:string): Observable<any> {
    return this.http.delete(this.origin+'/'+id,{withCredentials:true});
  }

  updateState(task: Task):Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    console.log(task);
    
    return this.http.put(this.origin+'/updateState',JSON.stringify({
      id: task._id,
      status: task.status
    }),httpOption)
  }
}
