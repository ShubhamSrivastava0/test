import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

describe('TaskListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskListComponent
      ],
      imports: [
        MatTableModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
      ]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TaskListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});