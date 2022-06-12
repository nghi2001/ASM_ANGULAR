import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  @Output() newProjectEvent = new EventEmitter();
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  update(project:any): void {
    console.log(project.value.teams);
    let today = new Date();
    let arrayNumber = project.value.teams.toString().split(" ");
    // arrayNumber = arrayNumber.map((num:string) => parseInt(num));

    let Project : Project = {
      name: project.value.name,
      budget: project.value.budget,
      leader: project.value.leader,
      teams: arrayNumber,
      startAt: String(today.getFullYear()+"/"+(Number(today.getMonth())+1)+"/"+today.getDate()),
      state: true
    }
    console.log(Project);
    
    this.newProjectEvent.emit(Project)
    // this.projectService.addProject(project)
  }

}
