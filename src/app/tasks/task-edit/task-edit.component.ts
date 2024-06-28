import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  taskForm!: FormGroup;
  taskId!: any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(this.taskId).subscribe(task => {
      this.taskForm = this.fb.group({
        title: [task.title, [Validators.required, Validators.minLength(3)]],
        description: [task.description, Validators.required],
        comments: [task.comments]
      });
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const updatedTask: Task = {
        id: this.taskId,
        ...this.taskForm.value
      };
      this.taskService.updateTask(updatedTask).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}