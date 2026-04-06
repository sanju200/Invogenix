import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCurrency } from './manage-currency';

describe('ManageCurrency', () => {
  let component: ManageCurrency;
  let fixture: ComponentFixture<ManageCurrency>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCurrency],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageCurrency);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
