import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employes } from 'src/app/interfaces/employes';
import { Task } from 'src/app/interfaces/task';
import { EmployeService } from 'src/app/Services/employe.service';
@Component({
  selector: 'app-teams',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() listEmploye?: Employes[]
  searchEmploye: Employes[] = []
  idProject : string = ''
  constructor(
    private EmployeService: EmployeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.idProject = String(this.route.snapshot.paramMap.get('id')); 
    
  }

  find(event: any) {
    this.EmployeService.getUserByName(event.target.value)
                        .subscribe((value:Employes[]|null) => {
                          if(value)
                          this.searchEmploye = value
                        })
  }

  add(employe:Employes) {
    this.EmployeService.updateEmployeProject(employe._id, this.idProject).subscribe(value => {
      
    })
    
  }
}
