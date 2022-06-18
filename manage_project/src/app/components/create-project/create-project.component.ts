import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employes } from 'src/app/interfaces/employes';
import { Project } from '../../interfaces/project';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  @Output() newProjectEvent = new EventEmitter();
  Leader?:Employes
  Emplye:Employes[] = []
  Teams: Employes[] = []
  listId: string[] = []
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }
  initTeam() {
    if (this.Leader) {
      this.Emplye = this.Emplye.filter(eml => eml._id !== this.Leader?._id)
      this.Teams = [{...this.Leader}, ...this.Emplye]

      return
    }
    
    return this.Teams = [...this.Emplye]
    
  }
  chooseLeader(leader:Employes) {
    this.Leader = leader
    this.initTeam()
    
  }
  addTeam(employe: any) {
    this.Emplye = [...this.Emplye, employe]
    this.initTeam()
    
  }
  update(project:any): void {
    console.log(project.value);
    this.listId = [];
    this.Teams.forEach(val => {
      this.listId.push(val._id)  
    })
    console.log(this.listId);
    
    let today = new Date();
    // let arrayNumber = project.value.teams.toString().split(" ");

    let Project : Project = {
      name: project.value.name,
      budget: project.value.budget,
      leader: project.value.leader,
      teams: this.listId,
      startAt: String(today.getFullYear()+"/"+(Number(today.getMonth())+1)+"/"+today.getDate()),
      state: true
    }
    console.log(Project);
    
    this.newProjectEvent.emit(Project)
    // this.projectService.addProject(project)
  }

}
