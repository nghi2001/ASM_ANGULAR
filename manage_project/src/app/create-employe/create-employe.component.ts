import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeService } from '../Services/employe.service';

@Component({
  selector: 'app-create-employe',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeComponent implements OnInit {
  employeForm = new FormGroup({
    lastname: new FormControl(''),
    firstname:new FormControl(''),
    birthday: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
    image: new FormControl(),
    sex: new FormControl(),
  })
  constructor(
    private EmployeService : EmployeService
  ) { }

  ngOnInit(): void {
  }

  create() {
    console.log(this.employeForm.value);
    this.EmployeService.createEmploye(this.employeForm.value).subscribe(value => {
      
    })
  }
  changeImage(image:any) {
    console.log(image.files[0]);
    this.employeForm.controls['image'].setValue(image.files[0])
  }
}
