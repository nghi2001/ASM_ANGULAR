import { Component, Input, OnInit } from '@angular/core';
import { Employes } from 'src/app/interfaces/employes';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {
  @Input() projectID?: string ;
  project?: Project
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    // console.log(this.projectID);
    // this.getProject(this.projectID);
  }
  ngOnchanges() :void{
    alert(2)
  }
  getProject(id?:string) {
    if(id)
    this.projectService.getProject(id)
      .subscribe(project => {
        this.project = project.data;
        if(this.project){
          this.project.leader = (this.project.leader as Employes)._id
        }
        console.log(this.project);
        
      })
  }
  update(project:any) {
    // console.log(project.value);
    project.value._id = this.projectID;
    this.projectService.update(project.value)
  }
}
