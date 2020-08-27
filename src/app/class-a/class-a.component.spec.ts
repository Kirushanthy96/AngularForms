import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAComponent } from './class-a.component';

describe('ClassAComponent', () => {
  let component: ClassAComponent;
  let fixture: ComponentFixture<ClassAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
