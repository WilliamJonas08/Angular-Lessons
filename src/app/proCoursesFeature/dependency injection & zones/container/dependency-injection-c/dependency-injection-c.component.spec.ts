import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionCComponent } from './dependency-injection-c.component';

describe('DependencyInjectionCComponent', () => {
  let component: DependencyInjectionCComponent;
  let fixture: ComponentFixture<DependencyInjectionCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyInjectionCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyInjectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
