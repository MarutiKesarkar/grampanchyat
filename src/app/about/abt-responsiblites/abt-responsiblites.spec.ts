import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtResponsiblites } from './abt-responsiblites';

describe('AbtResponsiblites', () => {
  let component: AbtResponsiblites;
  let fixture: ComponentFixture<AbtResponsiblites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbtResponsiblites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbtResponsiblites);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
