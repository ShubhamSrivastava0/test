import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddComponent } from './task-add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskService } from 'src/app/service/task.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddComponent ],
      imports: [ 
        HttpClientTestingModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
         MatInputModule

       ],
  
      providers: [ TaskService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
