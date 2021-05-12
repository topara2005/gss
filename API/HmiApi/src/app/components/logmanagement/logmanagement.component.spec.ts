import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmanagementComponent } from './logmanagement.component';

describe('LogmanagementComponent', () => {
  let component: LogmanagementComponent;
  let fixture: ComponentFixture<LogmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
