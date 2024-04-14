import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUdComponent } from './about-ud.component';

describe('AboutUdComponent', () => {
  let component: AboutUdComponent;
  let fixture: ComponentFixture<AboutUdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUdComponent]
    });
    fixture = TestBed.createComponent(AboutUdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
