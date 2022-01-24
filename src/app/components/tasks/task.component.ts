import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[]= [];
  
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks =>
     {this.tasks = tasks
    });
  }

}
