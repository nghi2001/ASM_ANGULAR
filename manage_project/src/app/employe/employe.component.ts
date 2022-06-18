import { Component, OnInit } from '@angular/core';
import { Employes } from '../interfaces/employes';
import { EmployeService } from '../Services/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employes: Employes[] = []
  constructor(
    private employeService: EmployeService
  ) { }

  ngOnInit(): void {
    this.getAllEmploye()
  }

  getAllEmploye() {
    this.employeService.getAll().subscribe((employe:any) => {
      console.log(employe);
      
      this.employes = employe.data
    })
  }

}
