import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFailureComponent } from './api-failure.component';

describe('ApiFailureComponent', () => {
  let component: ApiFailureComponent;
  let fixture: ComponentFixture<ApiFailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiFailureComponent]
    });
    fixture = TestBed.createComponent(ApiFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
