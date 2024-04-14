import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiginComponent } from './admin-sigin.component';

describe('AdminSiginComponent', () => {
  let component: AdminSiginComponent;
  let fixture: ComponentFixture<AdminSiginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSiginComponent]
    });
    fixture = TestBed.createComponent(AdminSiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
