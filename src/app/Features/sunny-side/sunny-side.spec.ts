import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnySide } from './sunny-side';

describe('SunnySide', () => {
  let component: SunnySide;
  let fixture: ComponentFixture<SunnySide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunnySide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunnySide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
