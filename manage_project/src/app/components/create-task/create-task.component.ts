import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  @Input() idProject!:string
  @Output() newItemEvent = new EventEmitter<Task>();
  taskForm = new FormGroup({
    tenTask: new FormControl(''),
    moTa: new FormControl(''),
    duanID: new FormControl(null),
    nhanvienID: new FormControl(2),
    priority: new FormControl(null),
    status: new FormControl(0)
  })
  constructor(
    private TaskService : TaskService
  ) {
   }

  ngOnInit(): void {
    this.taskForm.patchValue({
      duanID: this.idProject
    })
  }
  
  ngOnchanges(): void {
    let task = this.taskForm.value;
    console.log(this.taskForm.get('name')?.value);
    

  }

  sb(){
    console.log(this.taskForm.value)
    this.TaskService.addTask(this.taskForm.value) 
                    .subscribe(value => {
                      console.log(value);
                      this.newItemEvent.emit(value);
                    },err => {
                      if(err.status = 401) {
                        localStorage.removeItem('state');
                        alert('token het han')
                      }
                    })
  }
}
