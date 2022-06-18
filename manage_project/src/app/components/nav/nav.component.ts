import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

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
  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().subscribe(val => {
      console.log(val);
      this.route.navigate(['/login'])
    },err => {
      console.log(err);
      
    })
  } 
}
