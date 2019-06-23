import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmasterComponent } from './listmaster.component';

describe('ListmasterComponent', () => {
  let component: ListmasterComponent;
  let fixture: ComponentFixture<ListmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
