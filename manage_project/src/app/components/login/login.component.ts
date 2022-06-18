import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  })
  constructor(
    private AuthService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.AuthService.login(this.employeForm.value)
      .subscribe(value => {
        console.log(value.status);
        localStorage.setItem('state',value.status)
        this.route.navigate([''])
      },error => {
        if(error)
        alert(error.statusText)
        
      })
  }
}
