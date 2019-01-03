import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateUsComponent } from './donate-us.component';

describe('DonateUsComponent', () => {
  let component: DonateUsComponent;
  let fixture: ComponentFixture<DonateUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
