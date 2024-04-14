import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPayBillComponent } from './customer-pay-bill.component';

describe('CustomerPayBillComponent', () => {
  let component: CustomerPayBillComponent;
  let fixture: ComponentFixture<CustomerPayBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPayBillComponent]
    });
    fixture = TestBed.createComponent(CustomerPayBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
