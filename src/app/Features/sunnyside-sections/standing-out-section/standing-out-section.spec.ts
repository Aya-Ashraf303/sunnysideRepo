import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingOutSection } from './standing-out-section';

describe('StandingOutSection', () => {
  let component: StandingOutSection;
  let fixture: ComponentFixture<StandingOutSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingOutSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingOutSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
