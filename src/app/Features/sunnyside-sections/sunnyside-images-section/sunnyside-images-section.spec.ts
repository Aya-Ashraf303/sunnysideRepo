import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnysideImagesSection } from './sunnyside-images-section';

describe('SunnysideImagesSection', () => {
  let component: SunnysideImagesSection;
  let fixture: ComponentFixture<SunnysideImagesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunnysideImagesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunnysideImagesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
