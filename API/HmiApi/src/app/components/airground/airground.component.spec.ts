import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirgroundComponent } from './airground.component';

describe('AirgroundComponent', () => {
  let component: AirgroundComponent;
  let fixture: ComponentFixture<AirgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
