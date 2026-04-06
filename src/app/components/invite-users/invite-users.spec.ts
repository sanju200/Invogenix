import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUsers } from './invite-users';

describe('InviteUsers', () => {
  let component: InviteUsers;
  let fixture: ComponentFixture<InviteUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteUsers],
    }).compileComponents();

    fixture = TestBed.createComponent(InviteUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
