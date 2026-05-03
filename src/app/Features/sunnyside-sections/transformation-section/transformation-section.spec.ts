import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationSection } from './transformation-section';

describe('TransformationSection', () => {
  let component: TransformationSection;
  let fixture: ComponentFixture<TransformationSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
