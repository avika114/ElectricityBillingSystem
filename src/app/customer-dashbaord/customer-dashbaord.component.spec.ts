import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashbaordComponent } from './customer-dashbaord.component';

describe('CustomerDashbaordComponent', () => {
  let component: CustomerDashbaordComponent;
  let fixture: ComponentFixture<CustomerDashbaordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDashbaordComponent]
    });
    fixture = TestBed.createComponent(CustomerDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
