import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnysideFooterSection } from './sunnyside-footer-section';

describe('SunnysideFooterSection', () => {
  let component: SunnysideFooterSection;
  let fixture: ComponentFixture<SunnysideFooterSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunnysideFooterSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunnysideFooterSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
