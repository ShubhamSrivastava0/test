import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { AuthGuard } from '../service/auth.guard';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add', component: TaskAddComponent },
  { path: ':id', component: TaskDetailsComponent },
  { path: ':id/edit', component: TaskEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
