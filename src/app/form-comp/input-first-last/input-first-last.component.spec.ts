import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFirstLastComponent } from './input-first-last.component';

describe('InputFirstLastComponent', () => {
  let component: InputFirstLastComponent;
  let fixture: ComponentFixture<InputFirstLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFirstLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFirstLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
