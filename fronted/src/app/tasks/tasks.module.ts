import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    DeleteDialogComponent,
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    TasksRoutingModule,
  ],
})
export class TasksModule { }
