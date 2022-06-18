import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { EmployeService } from 'src/app/Services/employe.service';
import { ProjectService } from 'src/app/Services/project.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';
import { Project } from 'src/app/interfaces/project';
import { Task } from 'src/app/interfaces/task';
import { Employes } from 'src/app/interfaces/employes';
import { TaskService } from 'src/app/Services/task.service';
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  id!:string
  project!: any
  leader:Employes | null | undefined
  stateProject:boolean = true;
  listTask!:Task[]
  constructor(
    private employeService:EmployeService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private TaskService : TaskService
  ) { }

  ngOnInit(): void {
    let idProject:string = String(this.route.snapshot.paramMap.get('id'));  
    this.id = idProject  
    this.getProject(idProject);
    this.getListTask(idProject);
     
  }

  update(task:Task) {
    
    this.TaskService.updateState(task).subscribe((value) => {
      console.log(value);  
      if(value.status == 201) {
        this.listTask = this.listTask.map(val => {
          if(val._id === task._id) {
            return {
              ...task,
              status: !task.status
            }
          }
          return val
        })
      }    
    },err => {
      if(err.status = 401) {
        localStorage.removeItem('state');
        alert('token het han')
      }
    })
  }
  getLeader(id:string) {
    this.employeService.getOneUser(id)
      .subscribe(leader => {
        this.leader = leader
      },err => {
        if(err.status = 401) {
          localStorage.removeItem('state');
          alert('token het han')
        }
      })
  }

  getListTask(idProject?:any ) {
    this.TaskService.getTaskFromProject(idProject)
      .subscribe(data => {
        
        if(data)
          this.listTask = data
      },err => {
        if(err.status = 401) {
          localStorage.removeItem('state');
          alert('token het han')
        }
      })
  }
  getProject(idProject:string) {
    this.projectService.getProject(idProject).subscribe((prj) => {
      // this.project = prj      
      
      if(prj) this.project = prj.data
      // console.log(this.project);
      
    })
  }
  
  addItem(task:any) {
    this.listTask.push(task.newEmploye);
  }

  deleteTask(id:string){
    if(confirm('Are you sure')) {
      this.TaskService.delete(id)
      .subscribe(val => {
        if(val != null) {
          alert('success')
        }
      },err => {
        if(err.status = 401) {
          localStorage.removeItem('state');
          alert('token het han')
        }
      })
    }
  }
}
