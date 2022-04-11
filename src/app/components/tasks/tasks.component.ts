import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock.tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[] = [] 

  constructor(private taskservice : TaskService) { 

  }


  ngOnInit(): void {
      this.taskservice.getTasks().subscribe(tasks => this.tasks = tasks)
  }

}
