import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconfiguratorComponent } from './listconfigurator.component';

describe('ListconfiguratorComponent', () => {
  let component: ListconfiguratorComponent;
  let fixture: ComponentFixture<ListconfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListconfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
