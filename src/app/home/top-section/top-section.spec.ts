import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSection } from './top-section';

describe('TopSection', () => {
  let component: TopSection;
  let fixture: ComponentFixture<TopSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
