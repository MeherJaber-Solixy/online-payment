import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPayementComponent } from './credit-card-payement.component';

describe('CreditCardPayementComponent', () => {
  let component: CreditCardPayementComponent;
  let fixture: ComponentFixture<CreditCardPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardPayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
