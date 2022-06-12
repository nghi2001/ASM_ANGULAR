import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  listfeature: object[] = [
    {
      name: 'Dashboard', active: false
    },
    {
      name: 'About', active: false
    },
    {
      name: 'Task', active: true
    },
    {
      name: 'Employe', active: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
