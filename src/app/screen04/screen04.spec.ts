import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen04 } from './screen04';

describe('Screen04', () => {
  let component: Screen04;
  let fixture: ComponentFixture<Screen04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Screen04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Screen04);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
