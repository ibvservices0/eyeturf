import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen02 } from './screen02';

describe('Screen02', () => {
  let component: Screen02;
  let fixture: ComponentFixture<Screen02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screen02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screen02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
