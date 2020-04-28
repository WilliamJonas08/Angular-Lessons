import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementContainerComponent } from './state-management-container.component';

describe('StateManagementContainerComponent', () => {
  let component: StateManagementContainerComponent;
  let fixture: ComponentFixture<StateManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateManagementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
