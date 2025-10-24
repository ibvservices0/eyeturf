import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen05 } from './screen05';

describe('Screen05', () => {
  let component: Screen05;
  let fixture: ComponentFixture<Screen05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screen05]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screen05);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
