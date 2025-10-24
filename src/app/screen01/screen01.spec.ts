import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen01 } from './screen01';

describe('Screen01', () => {
  let component: Screen01;
  let fixture: ComponentFixture<Screen01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screen01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screen01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
