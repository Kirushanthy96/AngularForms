import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstypeComponent } from './formstype.component';

describe('FormstypeComponent', () => {
  let component: FormstypeComponent;
  let fixture: ComponentFixture<FormstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
