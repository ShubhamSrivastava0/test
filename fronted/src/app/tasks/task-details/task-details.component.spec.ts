import { TestBed } from '@angular/core/testing';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

describe('DeleteDialogComponent', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDialogComponent]
    });
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(DeleteDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });  
});
