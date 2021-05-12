import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamfImportComponent } from './gamf-import.component';

describe('GamfImportComponent', () => {
  let component: GamfImportComponent;
  let fixture: ComponentFixture<GamfImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamfImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamfImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
