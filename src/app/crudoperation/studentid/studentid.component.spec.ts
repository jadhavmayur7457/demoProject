import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentidComponent } from './studentid.component';

describe('StudentidComponent', () => {
  let component: StudentidComponent;
  let fixture: ComponentFixture<StudentidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentidComponent]
    });
    fixture = TestBed.createComponent(StudentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
