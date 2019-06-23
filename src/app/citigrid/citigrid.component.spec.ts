import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitigridComponent } from './citigrid.component';

describe('CitigridComponent', () => {
  let component: CitigridComponent;
  let fixture: ComponentFixture<CitigridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitigridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitigridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
