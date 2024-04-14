import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillHistoryComponent } from './customer-bill-history.component';

describe('CustomerBillHistoryComponent', () => {
  let component: CustomerBillHistoryComponent;
  let fixture: ComponentFixture<CustomerBillHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBillHistoryComponent]
    });
    fixture = TestBed.createComponent(CustomerBillHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
