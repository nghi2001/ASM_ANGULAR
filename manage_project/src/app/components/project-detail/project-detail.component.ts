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

  // ngOnchanges(changes: SimpleChange) {
  //   alert(2)
  //   console.log(changes);
  //   if(this.project) {
  //     this.getLeader(this.project.leader);
  //     this.getListTask(this.project._id);
      
  //   }
  // }
  getLeader(id:string) {
    this.employeService.getOneUser(id)
      .subscribe(leader => {
        this.leader = leader
      })
  }

  getListTask(idProject?:any ) {
    this.TaskService.getTaskFromProject(idProject)
      .subscribe(data => {
        console.log(data);
        
        if(data)
          this.listTask = data
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
   console.log(task);
    this.listTask.push(task.newEmploye);
  }

  deleteTask(id:string){
    if(confirm('Are you sure')) {
      this.TaskService.delete(id)
      .subscribe(val => {
        if(val != null) {
          alert('success')
        }
      })
    }
  }
}
