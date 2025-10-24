import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen03 } from './screen03';

describe('Screen03', () => {
  let component: Screen03;
  let fixture: ComponentFixture<Screen03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screen03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screen03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
