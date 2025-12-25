import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTalk } from './member-talk';

describe('MemberTalk', () => {
  let component: MemberTalk;
  let fixture: ComponentFixture<MemberTalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberTalk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberTalk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
