import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtApproach } from './abt-approach';

describe('AbtApproach', () => {
  let component: AbtApproach;
  let fixture: ComponentFixture<AbtApproach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbtApproach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbtApproach);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
