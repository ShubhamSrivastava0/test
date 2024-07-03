import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { TaskEditComponent } from './task-edit.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('TaskEditComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskEditComponent
      ],
      imports: [
        HttpClientTestingModule,        
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ taskId: '123' })
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TaskEditComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
