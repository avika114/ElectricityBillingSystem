import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPayHistoryComponent } from './customer-pay-history.component';

describe('CustomerPayHistoryComponent', () => {
  let component: CustomerPayHistoryComponent;
  let fixture: ComponentFixture<CustomerPayHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPayHistoryComponent]
    });
    fixture = TestBed.createComponent(CustomerPayHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
