import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamfExportedComponent } from './gamf-exported.component';

describe('GamfExportedComponent', () => {
  let component: GamfExportedComponent;
  let fixture: ComponentFixture<GamfExportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamfExportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamfExportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
