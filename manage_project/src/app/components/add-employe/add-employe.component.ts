import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employes } from 'src/app/interfaces/employes';
import { EmployeService } from 'src/app/Services/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  searchEmploye : Employes[] = []
  @Output() newLead = new EventEmitter();
  constructor(
    private EmployeService: EmployeService
  ) { }

  ngOnInit(): void {
  }

  find(event:any) {
    if(event.target.value.length >0) {
      this.EmployeService.getUserByName(event.target.value)
                          .subscribe((value:Employes[]|null) => {
                            if(value)
                            this.searchEmploye = value
                          },err => {
                            if(err.status = 401) {
                              localStorage.removeItem('state');
                              alert('token het han')
                            }
                          })
    }
    return
  }

  newLeader(leader: any) {
    this.searchEmploye = []
    this.newLead.emit(leader)
  }
}
